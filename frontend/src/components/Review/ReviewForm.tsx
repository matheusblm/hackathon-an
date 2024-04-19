import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import axios from "axios"; 

function ReviewForm() {
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");
  const [generatedDescription, setGeneratedDescription] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://api.textcortex.com/v1/texts/rewritings", {
        description: description,
        max_tokens: 50, 
      }, {
        headers: {
          "Authorization": `gAAAAABmIsT9VXeWGesUmnZndvqXWKQz0rSVsykmVpN1Xc6BPAhLIpdRIFEFMwYDVzWtk7NBesUolNdEfoHrDOCfN9sIM_C_NWoxykeJWTC-0p3LEuEBxTE_xdQjVE-Qv3lxhAUogdfz`, 
          "Content-Type": "application/json",
        },
      });

      setGeneratedDescription(response.data.choices[0].text.trim());
    } catch (error) {
      console.error("Erro ao solicitar descrição:", error);
    }
  };

  return (
    <Box p={4}>
      <FormControl>
        <FormLabel htmlFor="description">Descrição</FormLabel>
        <Input
          id="description"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel htmlFor="comment">Comentário</FormLabel>
        <Input 
          id="comment" 
          type="text" 
          value={comment}
          onChange={handleCommentChange}
        />
      </FormControl>
      <Button mt={8} colorScheme="blue" onClick={handleSubmit}>
        Enviar Review
      </Button>
      {generatedDescription && (
        <Box mt={4}>
          <strong>Descrição gerada:</strong>
          <p>{generatedDescription}</p>
        </Box>
      )}
    </Box>
  );
}

export default ReviewForm;
