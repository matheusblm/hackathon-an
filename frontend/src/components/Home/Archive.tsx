import { Box, Text, Stack, Image } from "@chakra-ui/react";

function ArchivesList() {
  const archives = [
    { id: 1, title: "Manuscritos Medievais", imageUrl: "/path-to-image-1.jpg" },
    {
      id: 2,
      title: "Invenções do Século XX",
      imageUrl: "/path-to-image-2.jpg",
    },
  ];

  return (
    <Box>
      <Text fontSize="2xl" mb={3}>
        Acervos Destacados
      </Text>
      <Stack spacing={4}>
        {archives.map((archive) => (
          <Box
            key={archive.id}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
          >
            <Image
              src={archive.imageUrl}
              alt={archive.title}
              boxSize="100px"
              objectFit="cover"
            />
            <Text mt={2}>{archive.title}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default ArchivesList;
