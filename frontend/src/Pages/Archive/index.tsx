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

function ArchivesPage() {
  const archives = [
    {
      id: 1,
      title: "Arte Medieval",
      imageUrl: "/path-to-image-1.jpg",
      reviews: 3,
    },
    {
      id: 2,
      title: "Manuscritos Antigos",
      imageUrl: "/path-to-image-2.jpg",
      reviews: 5,
    },
    {
      id: 3,
      title: "Invenções do Renascimento",
      imageUrl: "/path-to-image-3.jpg",
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
