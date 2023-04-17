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
            My Name
          </Text>
          <Text fontSize="lg">Frontend Developer</Text>
          <Text fontSize="lg" color="gray.500">
            I'm a frontend developer with experience building web applications
            using React and other modern web technologies. I'm passionate about
            creating intuitive, user-friendly interfaces and building scalable,
            maintainable codebases.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
