import { Box, Grid, Image, Text, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import imageOne from "../../assets/BR_RJANRIO_O2_0_FOT_0391_d0001de0001_page-0001.jpg";
import imageTwo from "../../assets/BR_RJANRIO_O2_0_FOT_0184_d0001de0001_page-0001.jpg";

function ArchiveDetailsPage() {
  const { archiveId } = useParams();

  const navigate = useNavigate();
  const items = [
    { id: 1, title: "Documento 1", imageUrl: imageOne },
    { id: 2, title: "Documento 2", imageUrl: imageTwo },
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
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            w={500}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              boxSize="100px"
              objectFit="cover"
              w={"100%"}
              h={300}
            />
            <Text mt={2}>{item.title}</Text>
            <Button
              colorScheme="blue"
              mt={3}
              onClick={() => navigate(`/acervos/${archiveId}/${item.imageUrl}`)}
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
