import { Box, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function HeaderComponent() {
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex align="center" maxW="1200px" mx="auto">
        <Heading size="lg">Minha Aplicação</Heading>
        <Spacer />
        <Link
          as={RouterLink}
          to="/"
          px={2}
          py={1}
          rounded={"md"}
          _hover={{ bg: "blue.600" }}
        >
          Início
        </Link>
        <Link
          as={RouterLink}
          to="/acervos"
          px={2}
          py={1}
          rounded={"md"}
          _hover={{ bg: "blue.600" }}
        >
          Acervos
        </Link>
        <Link
          as={RouterLink}
          to="/ranking"
          px={2}
          py={1}
          rounded={"md"}
          _hover={{ bg: "blue.600" }}
        >
          Ranking
        </Link>
        <Link
          as={RouterLink}
          to="/meu-cadastro"
          px={2}
          py={1}
          rounded={"md"}
          _hover={{ bg: "blue.600" }}
        >
          Meu Cadastro
        </Link>
      </Flex>
    </Box>
  );
}

export default HeaderComponent;
