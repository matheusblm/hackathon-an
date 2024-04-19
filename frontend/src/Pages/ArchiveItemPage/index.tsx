import {
  Box,
  Image,
  Flex,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

function ArchiveItemPage() {
  return (
    <Flex p={5} align="center">
      <Box flex="1" mr={5}>
        <Image
          src="/path-to-large-image.jpg"
          alt="Documento Grande"
          boxSize="500px"
          objectFit="contain"
        />
      </Box>
      <Box flex="1">
        <FormControl>
          {[...Array(8)].map((_, index) => (
            <Box key={index} mb={4}>
              <FormLabel>{`Opção ${index + 1}`}</FormLabel>
              <Select placeholder={`Selecione a opção ${index + 1}`}>
                <option>Opção A</option>
                <option>Opção B</option>
                <option>Opção C</option>
              </Select>
            </Box>
          ))}
        </FormControl>
      </Box>
    </Flex>
  );
}

export default ArchiveItemPage;
