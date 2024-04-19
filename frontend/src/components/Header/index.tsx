import { Box, Flex, Link, Spacer, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ImageLogo from "../../assets/BlidioSecond.png";

function HeaderComponent() {
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex align="center" maxW="1200px" mx="auto">
        <Image src={ImageLogo} alt="Logo" w={100} h={75} />
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
