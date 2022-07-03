import React from "react";
import {
  Center,
  Box,
  Heading,
  VStack,
  HStack,
  FormControl,
  Button,
  Input,
  ScrollView,
  Image,
} from "native-base";
import InputFormElement from "./InputFormElement";

const SigninForm = (props) => {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const setFieldValue = (event, fieldName) => {
    const v = { ...formData };
    v[fieldName] = event;
    setData(v);
    setErrors({});
    console.log(formData);
  };
  const vvalidateForm = () => {
    let valid = validateForm1();
    if (valid) {
      props.submitTrue();
      setTimeout(() => {
        props.nxt(formData);
      }, 2500);
    }
  };
  const validateForm1 = () => {
    let isFormValid = true;
    let errorObj = { ...errors };
    if (formData["password"] === undefined) {
      errorObj["password"] = "Password is required!";
      isFormValid = false;
    }
    setErrors(errorObj);
    return isFormValid;
  };

  return (
    <>
      <Box flex="1" pb={20}>
        <ScrollView>
          <Center>
            <Image
              size={250}
              resizeMode={"contain"}
              borderRadius={100}
              source={require("../assets/2.png")}
              alt="Alternate Text"
            />
            <Box safeArea w="90%" maxW="290">
              <HStack space={3} pl="10">
                <VStack>
                  <Heading
                    size="lg"
                    color="green.500"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    fontWeight="bold"
                  >
                    Zer0 Waste
                  </Heading>
                  <Heading
                    mt="1"
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                    fontWeight="medium"
                    size="xs"
                  >
                    Welcome Back!
                  </Heading>
                </VStack>
                <Center>
                  {props.submitting != true ? (
                    <Button mt="2" colorScheme="indigo" onPress={vvalidateForm}>
                      Sign in
                    </Button>
                  ) : (
                    <Button isLoading>Button</Button>
                  )}
                </Center>
              </HStack>
              <VStack space={3} mt="5">
                <InputFormElement
                  displayName={"Email"}
                  fieldType={"email"}
                  name={"email"}
                  setFieldValue={setFieldValue}
                  errors={errors}
                  formData={props.dat}
                />
                <InputFormElement
                  displayName={"Password"}
                  fieldType={"password"}
                  name={"password"}
                  setFieldValue={setFieldValue}
                  errors={errors}
                  formData={""}
                />
              </VStack>
            </Box>
          </Center>
        </ScrollView>
      </Box>
    </>
  );
};
export default SigninForm;
