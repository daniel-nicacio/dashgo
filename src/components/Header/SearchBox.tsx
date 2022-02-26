import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={480}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Icon as={RiSearch2Line} fontSize="20" />
    </Flex>
  );
}
