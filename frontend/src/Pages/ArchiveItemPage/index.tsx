import {
  Box,
  Image,
  Flex,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import imageTwo from "../../assets/BR_RJANRIO_O2_0_FOT_0184_d0001de0001_page-0001.jpg";

function ArchiveItemPage() {
  const optionLabels = [
    "Gênero",
    "Movimento social",
    "Regionaidade",
    "Etnia",
    "Cultura",
    "Temas sociais",
    "Temas inclusivos",
    "Temas variaveis",
  ];
  const optionArrays = [
    ["Mulher", "Homem", "Transexual"],
    [
      "Movimento Feminista",
      "Movimento Negro",
      "Movimento Estudantil",
      "Movimento Estudantil",
      "Movimento Operário",
      "Movimento Ambientalista",
      "Movimento LGBTQIA+",
      "Movimentos indígenas",
      "Movimentos de Trabalhadores de diversos setores",
    ],
    ["Urbano", "Rural"],
    ["Pardos", "Branco", "Negros", "indígenos", "amarelos"],
    ["Cultura LGBTQ", "Cultura Afrodescendentes", "CulturaIndigena"],
    ["Empoderamento", "Liderança Feminina", "Respeito"],
    ["Inclusão", "Adaptacao", "Acessibilidade"],
    ["Esporte", "politíca", "educação", "música", "cinema", "teatro"],
  ];

  const [selectedOptions, setSelectedOptions] = useState(Array(8).fill(""));

  // Função para atualizar a opção selecionada
  const handleOptionChange = (index, value) => {
    const newOptions = [...selectedOptions];
    newOptions[index] = value;
    setSelectedOptions(newOptions);
  };

  return (
    <Flex p={5} align="center">
      <Box flex="1" mr={5}>
        <Image src={imageTwo} alt="Documento Grande" objectFit="contain" />
      </Box>
      <Box flex="1">
        <FormControl>
          {selectedOptions.map((option, index) => (
            <Box key={index} mb={4}>
              <FormLabel>{optionLabels[index]}</FormLabel>
              <Select
                placeholder={`Selecione ${optionLabels[index]}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              >
                {optionArrays[index].map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </Select>
            </Box>
          ))}
        </FormControl>
      </Box>
    </Flex>
  );
}

export default ArchiveItemPage;
