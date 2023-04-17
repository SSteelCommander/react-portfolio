import { Flex, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      alignItems="center"
      bg="gray.200"
      position="sticky"
      bottom="0"
      width="100%"
      height="60px"
    >
      <IconButton
        as="a"
        href="https://github.com/username"
        target="_blank"
        aria-label="Github"
        mx={2}
        fontSize="20px"
        colorScheme="green"
        icon={<FaGithub />}
      />
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/username/"
        target="_blank"
        aria-label="LinkedIn"
        mx={2}
        fontSize="20px"
        colorScheme="blue"
        icon={<FaLinkedin />}
      />
      <IconButton
        as="a"
        href="https://twitter.com/username"
        target="_blank"
        aria-label="Twitter"
        mx={2}
        fontSize="20px"
        colorScheme="twitter"
        icon={<FaTwitter />}
      />
    </Flex>
  );
}
