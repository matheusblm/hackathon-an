import { Box, SimpleGrid, Text } from "@chakra-ui/react";

function Categories() {
  const categories = ["História", "Arte", "Ciência", "Tecnologia"];

  return (
    <Box>
      <Text fontSize="2xl" mb={3}>
        Categorias
      </Text>
      <SimpleGrid columns={2} spacing={5}>
        {categories.map((category) => (
          <Box
            key={category}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
          >
            {category}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Categories;
