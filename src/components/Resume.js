import React from "react";
import { Box, Heading, List, ListItem, Link, Button } from "@chakra-ui/react";
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function Resume() {
  const proficiencies = [
    { name: "JavaScript", icon: FaJsSquare },
    { name: "React", icon: FaReact },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "SQL", icon: FaDatabase },
    { name: "Git", icon: FaGitAlt },
    { name: "AWS", icon: FaAws },
  ];

  return (
    <Box maxW="800px" mx="auto" py={8} px={4}>
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        Resume
      </Heading>
      <Box display="flex" justifyContent="center">
        <Link href="/path/to/resume.pdf" download>
          <Button colorScheme="purple">Download Resume</Button>
        </Link>
      </Box>
      <Box mt={8}>
        <Heading as="h3" size="lg" mb={4}>
          Proficiencies
        </Heading>
        <List display="flex" flexWrap="wrap" justifyContent="center">
          {proficiencies.map(({ name, icon: Icon }) => (
            <ListItem
              key={name}
              display="flex"
              alignItems="center"
              mb={4}
              mx={4}
            >
              <Icon size="2em" color="purple.500" mr={2} />
              <Box fontSize="lg">{name}</Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
