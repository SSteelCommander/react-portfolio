import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box textAlign="center">
      <Heading as="h1" size="xl" my={10}>
        404 Not Found
      </Heading>
      <Box fontSize="xl">Sorry, the page you're looking for doesn't exist.</Box>
    </Box>
  );
}
