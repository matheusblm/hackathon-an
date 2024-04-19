import { Box, VStack } from "@chakra-ui/react";
import Categories from "../components/Home/Categories";
import ArchivesList from "../components/Home/Archive";
import RankingPage from "./Ranking";

function HomePage() {
  return (
    <Box p={5}>
      <VStack spacing={8} p={5}>
        <Categories />
        <ArchivesList />
        <RankingPage />
      </VStack>
    </Box>
  );
}

export default HomePage;
