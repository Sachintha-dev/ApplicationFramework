import { Box, Container, Stack, Text, useColorMode } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return <img src={logo} alt="Logo" style={{ height: 32, width: "auto" }} />;
};

export default function Footer() {
  const { colorMode } = useColorMode();

  const bgColor = colorMode === "light" ? "white" : "gray.800";
  const textColor = colorMode === "light" ? "gray.800" : "white";

  return (
    <Box bg={bgColor} color={textColor}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>© HealthPitch All rights reserved</Text>
      </Container>
    </Box>
  );
}
