import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

function ReviewForm() {
  return (
    <Box p={4}>
      <FormControl>
        <FormLabel htmlFor="description">Descrição</FormLabel>
        <Input id="description" type="text" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel htmlFor="comment">Comentário</FormLabel>
        <Input id="comment" type="text" />
      </FormControl>
      <Button mt={8} colorScheme="blue">
        Enviar Review
      </Button>
    </Box>
  );
}

export default ReviewForm;
