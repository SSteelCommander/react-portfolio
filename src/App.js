import { Box } from "@chakra-ui/react";
import Paths from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Box minH={"100vh"}>
      <Header />
      <Box minH={"100vh"}>
        <Paths />
      </Box>
      <Footer />
    </Box>
  );
}
