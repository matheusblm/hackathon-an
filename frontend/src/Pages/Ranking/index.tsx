import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";

function RankingPage() {
  const users = [
    { id: 1, name: "João Silva", score: 158 },
    { id: 2, name: "Maria Souza", score: 147 },
    { id: 3, name: "Carlos Pereira", score: 139 },
  ];

  const sortedUsers = users.sort((a, b) => b.score - a.score);

  return (
    <Box p={5} w="100%">
      <Text fontSize="2xl" mb={3}>
        Ranking de Usuários
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Colocação</Th>
            <Th>Nome</Th>
            <Th>Pontuação</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedUsers.map((user, index) => (
            <Tr key={user.id}>
              <Td>{index + 1}º </Td>
              <Td>{user.name}</Td>
              <Td>{user.score}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default RankingPage;
