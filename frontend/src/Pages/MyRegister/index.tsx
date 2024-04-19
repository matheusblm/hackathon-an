import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Select,
  NumberInput,
  NumberInputField,
  SimpleGrid,
  Box,
  Flex,
} from "@chakra-ui/react";
import { api } from "../../service/api";

function MyRegister() {
  const [user, setUser] = useState({
    id: null,
    name: "",
    password: "",
    sex: "",
    age: "",
    education: "",
    country: "",
    city: "",
    state: "",
  });
  const [isExistingUser, setIsExistingUser] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetch(`${api}/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          setIsExistingUser(true);
        })
        .catch((error) => console.error("Error fetching user", error));
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (
    valueString: string | React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setUser((prev) => ({ ...prev, [name]: parseInt(valueString.toString()) }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const method = isExistingUser ? "PUT" : "POST";
    fetch(`${api}/users${isExistingUser ? `/${user.id}` : ""}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!isExistingUser) {
          localStorage.setItem("userId", data.id);
        }
        toast({
          title: "Success",
          description: "User data has been saved.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast({
          title: "Error",
          description: "There was an error processing your request.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <FormControl as="form" onSubmit={handleSubmit}>
      <SimpleGrid columns={2} spacing={10} p={10}>
        <Box>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="password">Senha</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="sex">Sex</FormLabel>
          <Select id="sex" name="sex" value={user.sex} onChange={handleChange}>
            <option value="Male">Homem</option>
            <option value="Female">Mulher</option>
            <option value="Other">Outros</option>
          </Select>
        </Box>
        <Box>
          <FormLabel htmlFor="age">Idade</FormLabel>
          <NumberInput min={0}>
            <NumberInputField
              id="age"
              name="age"
              value={user.age}
              onChange={(valueString) => handleNumberChange(valueString, "age")}
            />
          </NumberInput>
        </Box>

        <Box>
          <FormLabel htmlFor="education">Educação</FormLabel>
          <Input
            id="education"
            name="education"
            value={user.education}
            onChange={handleChange}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="country">País</FormLabel>
          <Input
            id="country"
            name="country"
            value={user.country}
            onChange={handleChange}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="city">CIdade</FormLabel>
          <Input
            id="city"
            name="city"
            value={user.city}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="state">Estado</FormLabel>
          <Input
            id="state"
            name="state"
            value={user.state}
            onChange={handleChange}
          />
        </Box>
      </SimpleGrid>
      <Flex justifyContent="end">
        <Button mt={4} colorScheme="blue" type="submit" m={10}>
          {isExistingUser ? "Atualizar" : "Criar"}
        </Button>
      </Flex>
    </FormControl>
  );
}

export default MyRegister;
