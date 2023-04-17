import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import Avatar from "../assets/avatar.png";

export default function AboutMe() {
  return (
    <Box maxW="xl" mx="auto">
      <Flex alignItems="center" my={10}>
        <Image src={Avatar} alt="Avatar" borderRadius="full" boxSize="150px" />
        <Box ml={8}>
          <Text fontSize="2xl" fontWeight="bold">
            Nate Ricciardi
          </Text>
          <Text fontSize="lg">Junoir developer</Text>
          <Text fontSize="lg" color="gray.500">
            Im a junoir developer looking to expand his horisons. I have experience in 
            java, javascript, python, css, html but am always ready to learn.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
