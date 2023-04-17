import React from "react";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import projects from "../data/projects.json";

export default function Portfolio() {
  return (
    <Box maxW="xl" mx="auto" my={10}>
      <Heading as="h2" mb={8}>
        Portfolio
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {projects.map((project) => (
          <Box
            key={project.name}
            bg="white"
            boxShadow="md"
            rounded="md"
            overflow="hidden"
          >
            <Box height="200px">
              <img
                src={project.img}
                alt={project.name}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                {project.name}
              </Heading>
              <Text fontSize="md" mb={4}>
                {project.description}
              </Text>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
