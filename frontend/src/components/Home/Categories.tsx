import { Box, Button, Flex, Text } from "@chakra-ui/react";

function Categories() {
  const categories = ["História", "Arte", "Ciência", "Tecnologia"];

  return (
    <Box>
      <Text fontSize="2xl" mb={3}>
        Categorias
      </Text>
      <Flex gridGap="10px">
        {categories.map((category) => (
          <Button
            key={category}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
          >
            {category}
          </Button>
        ))}
      </Flex>
    </Box>
  );
}

export default Categories;
