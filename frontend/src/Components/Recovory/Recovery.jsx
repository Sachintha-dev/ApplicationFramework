import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import logo from "../../assets/logo.png";
import { emailValidate, passwordValidate } from "../../helper/validate";

export default function Recovery() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!emailValidate(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (!passwordValidate(values.password)) {
        errors.password = "Invalid password";
      }
      return errors;
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <Stack
      as="form"
      onSubmit={formik.handleSubmit}
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Recovery account</Heading>
          <FormControl id="OTP">
            <FormLabel>OTP</FormLabel>
            <Input type="text" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Link color={"blue.500"}>Cant get OTP Resend it </Link>
            </Stack>
            <Button type="submit" colorScheme={"blue"} variant={"solid"}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
