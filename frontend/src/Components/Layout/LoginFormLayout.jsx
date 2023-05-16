import { Box } from "@chakra-ui/react";

const LogInFormLayout = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box>{children}</Box>
    </Box>
  );
};

export default LogInFormLayout;
