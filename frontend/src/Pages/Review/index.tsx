import { Box, Flex, Image } from "@chakra-ui/react";
import ReviewForm from "../../components/Review/ReviewForm";

function ReviewPage() {
  return (
    <Flex justify="center" align="center" height="100vh">
      <Box w="50%">
        <Image
          src="url-da-imagem-aqui"
          alt="Imagem de Review"
          objectFit="cover"
        />
      </Box>
      <Box w="50%">
        <ReviewForm />
      </Box>
    </Flex>
  );
}

export default ReviewPage;
