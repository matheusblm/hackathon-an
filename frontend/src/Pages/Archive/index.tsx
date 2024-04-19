import {
  Box,
  Image,
  Text,
  Progress,
  VStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import imageOne from "../../assets/BR_RJANRIO_O2_0_FOT_0027_d0001de0001_page-0001.jpg";
import imageTwo from "../../assets/BR_RJANRIO_ON_0_FOT_0053_d0001de0001_page-0001.jpg";
import imagethree from "../../assets/BR_RJANRIO_O2_0_FOT_0465_d0001de0001_page-0001.jpg";

function ArchivesPage() {
  const archives = [
    {
      id: 1,
      title: "História",
      imageUrl: imageOne,
      reviews: 3,
    },
    {
      id: 2,
      title: "Ciência",
      imageUrl: imageTwo,
      reviews: 5,
    },
    {
      id: 3,
      title: "Arte",
      imageUrl: imagethree,
      reviews: 1,
    },
  ];

  const navigate = useNavigate();

  return (
    <Box p={5}>
      <VStack spacing={5}>
        {archives.map((archive) => (
          <Box
            key={archive.id}
            p={4}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            w="full"
          >
            <Image
              src={archive.imageUrl}
              alt={archive.title}
              boxSize="sm"
              objectFit="cover"
              mb={2}
              w={"100%"}
            />
            <Text fontSize="lg">{archive.title}</Text>
            <Progress
              colorScheme="green"
              size="md"
              value={(archive.reviews / 5) * 100}
            />
            <Flex justifyContent="end">
              <Button
                colorScheme="blue"
                onClick={() => navigate(`/acervos/${archive.id}`)}
                mt={5}
              >
                Ver Detalhes
              </Button>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default ArchivesPage;
