import { Box, Grid, Image, Text, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

function ArchiveDetailsPage() {
  const { archiveId } = useParams();

  const navigate = useNavigate();
  const items = [
    { id: 1, title: "Documento 1", imageUrl: "/path-to-small-image-1.jpg" },
    { id: 2, title: "Documento 2", imageUrl: "/path-to-small-image-2.jpg" },
  ];

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4}>
        Detalhes do Acervo
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {items.map((item) => (
          <Box
            key={item.id}
            p={4}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              boxSize="200px"
              objectFit="cover"
            />
            <Text mt={2}>{item.title}</Text>
            <Button
              colorScheme="blue"
              mt={3}
              onClick={() => navigate(`/acervos/${archiveId}/${item.id}`)}
            >
              Ver Arquivo
            </Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default ArchiveDetailsPage;
