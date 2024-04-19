import { Box, VStack } from "@chakra-ui/react";
import Categories from "../components/Home/Categories";
import ArchivesList from "../components/Home/Archive";

function HomePage() {
  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Categories />
        <ArchivesList />
      </VStack>
    </Box>
  );
}

export default HomePage;
