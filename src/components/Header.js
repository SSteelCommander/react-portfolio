import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <Box bg="gray.50" py={4} position="sticky" top="0" zIndex="sticky">
      <Flex alignItems="center" maxW="6xl" mx="auto">
        <Box fontSize="2xl" fontWeight="bold">
          Nate Ricciadi
        </Box>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/" mx={4}>
            About Me
          </Link>
          <Link as={RouterLink} to="/portfolio" mx={4}>
            Portfolio
          </Link>
          <Link as={RouterLink} to="/contact" mx={4}>
            Contact
          </Link>
          <Link as={RouterLink} to="/resume" mx={4}>
            Resume
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
