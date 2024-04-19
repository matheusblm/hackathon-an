import {
  Box,
  Image,
  Flex,
  Select,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

function ArchiveItemPage() {
  const optionLabels = [
    "Gênero",
    "Movimento social",
    "Regionaidade",
    "Etnia",
    "Cultura",
    "Temas sociais",
    "Temas inclusivos",
    "Temas variaveis",
  ];
  const optionArrays = [
    ["Mulher", "Homem", "Transexual"],
    [
      "Movimento Feminista",
      "Movimento Negro",
      "Movimento Estudantil",
      "Movimento Estudantil",
      "Movimento Operário",
      "Movimento Ambientalista",
      "Movimento LGBTQIA+",
      "Movimentos indígenas",
      "Movimentos de Trabalhadores de diversos setores",
    ],
    ["Urbano", "Rural"],
    ["Pardos", "Branco", "Negros", "indígenos", "amarelos"],
    ["Cultura LGBTQ", "Cultura Afrodescendentes", "CulturaIndigena"],
    ["Empoderamento", "Liderança Feminina", "Respeito"],
    ["Inclusão", "Adaptacao", "Acessibilidade"],
    ["Esporte", "politíca", "educação", "música", "cinema", "teatro"],
  ];

  const [selectedOptions, setSelectedOptions] = useState(Array(8).fill(""));

  
  const handleOptionChange = (index: any, value: any) => {
    const newOptions = [...selectedOptions];
    newOptions[index] = value;
    setSelectedOptions(newOptions);
  };
  const [generatedText, setGeneratedText] = useState(""); 

  
  const handleGenerateText = async () => {
    try {
      const response = await axios.post("https://api.textcortex.com/v1/texts/rewritings", {
          data: {
            options: selectedOptions,
            text: ["Texto de exemplo"],
          },
      }, {
        headers: {
          "Authorization": "143047600372-omft59ta24tjq3c31c00jat5uabljlp8.apps.googleusercontent.com", 
          "Content-Type": "application/json",
        },
      });
      setGeneratedText(response.data.choices[0].text.trim());
    } catch (error) {
      console.error("Erro ao enviar opções:", error);
    }
  };

  return (
    <Flex p={5} align="center">
      <Box flex="1" mr={5}>
        <Image src={imageTwo} alt="Documento Grande" objectFit="contain" />
      </Box>
      <Box flex="1">
        <FormControl>
          <Box>
            <FormLabel>Data</FormLabel>
            <Input name="date" type="date" />
          </Box>
          <Box>
            <FormLabel>Titulo</FormLabel>
            <Input name="title" />
          </Box>
          {selectedOptions.map((option, index) => (
            <Box key={index} mb={4}>
              <FormLabel>{optionLabels[index]}</FormLabel>
              <Select
                placeholder={`Selecione ${optionLabels[index]}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              >
                {optionArrays[index].map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </Select>
            </Box>
          ))}
           {}
           <Button mt={4} colorScheme="green" onClick={handleGenerateText}>
            Gerar Texto com Base nas Opções
          </Button>
          {/* Exibir o texto gerado */}
          {generatedText && (
            <Box mt={4}>
              <strong>Texto Gerado:</strong>
              <p>{generatedText}</p>
            </Box>
          )}
        </FormControl>
      </Box>
    </Flex>
  );
}

export default ArchiveItemPage;
