import { Box, Text, Image, Flex } from "@chakra-ui/react";
import imageOne from "../../assets/BR_RJANRIO_O2_0_FOT_0027_d0001de0001_page-0001.jpg";
import imageTwo from "../../assets/BR_RJANRIO_ON_0_FOT_0053_d0001de0001_page-0001.jpg";
import imagethree from "../../assets/BR_RJANRIO_O2_0_FOT_0465_d0001de0001_page-0001.jpg";

function ArchivesList() {
  const archives = [
    {
      id: 1,
      title: "História Brasileira",
      imageUrl: imageOne,
      reviews: 3,
    },
    {
      id: 2,
      title: "Ciência Mundial",
      imageUrl: imageTwo,
      reviews: 5,
    },
    {
      id: 3,
      title: "Arte Antiga",
      imageUrl: imagethree,
      reviews: 1,
    },
  ];

  return (
    <Box w="100%">
      <Text fontSize="2xl" mb={3}>
        Acervos Destacados
      </Text>
      <Flex gridGap="10px" flexWrap="wrap" justifyContent="center">
        {archives.map((archive) => (
          <Box
            key={archive.id}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            w={500}
          >
            <Image
              src={archive.imageUrl}
              alt={archive.title}
              boxSize="100px"
              objectFit="cover"
              w={"100%"}
              h={300}
            />
            <Text mt={2}>{archive.title}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default ArchivesList;
