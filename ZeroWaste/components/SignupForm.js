import React from "react";
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Button,
  Input,
  Image,
  HStack,
  ScrollView,
  Flex,
} from "native-base";
import axios from "axios";

import InputFormElement from "./InputFormElement";
const SignpForm = (props) => {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const setFieldValue = (event, fieldName) => {
    const v = { ...formData };
    v[fieldName] = event;
    setData(v);
    setErrors({});
    console.log(formData);
  };

  const validateForm = () => {
    let valid = validateForm1();
    if (valid) {
      props.submitTrue();
      //   handlepost();
      setTimeout(() => {
        props.nxt(formData);
      }, 2500);
    }
  };

  const handlepost = () => {
    console.log("hi");
    axios({
      url: "http://192.168.127.31:3000/api/zerowaste/signup",
      method: "POST",
      // Attaching the form data
      data: formData,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      // Handle the response from backend here
      .then((res) => {
        console.log(res, "res");
        console.log(res.data, "res data");
        props.nxt(formData);
      })

      // Catch errors if any
      .catch((err) => {
        console.log(err.msg);
      });
  };

  const validateForm1 = () => {
    console.log(formData);
    let isFormValid = true;
    let errorObj = { ...errors };
    if (formData["email"] == undefined) {
      errorObj["email"] = "Email is required";
      isFormValid = false;
    } else {
      if (!validateEmail(formData["email"])) {
        errorObj["email"] = "Email is not in correct format!";
        isFormValid = false;
      }
    }
    if (formData["password"] === undefined) {
      errorObj["password"] = "Password is required!";
      isFormValid = false;
    }
    if (formData["confirmPass"] === undefined) {
      errorObj["confirmPass"] = "Confirm Password is required!";
      isFormValid = false;
    }
    if (formData["mobile"] === undefined) {
      errorObj["mobile"] = "Mobile number is required!";
      isFormValid = false;
    }
    if (formData["pincode"] === undefined) {
      errorObj["pincode"] = "Pincode is required!";
      isFormValid = false;
    }
    if (formData["address"] === undefined) {
      errorObj["address"] = "Address is required!";
      isFormValid = false;
    }
    setErrors(errorObj);
    return isFormValid;
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (
    <Box flex="1">
      <ScrollView>
        <Center>
          <Image
            size={250}
            resizeMode={"contain"}
            borderRadius={100}
            source={require("../assets/food.jpg")}
            alt="Alternate Text"
          />
          <Box safeArea w="100%" maxW="290">
            <HStack space={3} pl="10">
              <VStack space={2} mt="5">
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
                  size="xs"
                  color="coolGray.800"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  fontWeight="medium"
                >
                  Sign up to continue!
                </Heading>
              </VStack>
              <Center>
                {props.submitting != true ? (
                  <Button mt="2" colorScheme="indigo" onPress={validateForm}>
                    Sign up
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
                formData={formData}
              />
              <InputFormElement
                displayName={"Password"}
                fieldType={"password"}
                name={"password"}
                setFieldValue={setFieldValue}
                errors={errors}
                formData={formData}
              />
              <InputFormElement
                displayName={"Confirm Password"}
                fieldType={"password"}
                name={"confirmPass"}
                setFieldValue={setFieldValue}
                errors={errors}
                formData={formData}
              />
              <InputFormElement
                displayName={"Mobile Number"}
                fieldType={"number"}
                name={"mobile"}
                setFieldValue={setFieldValue}
                errors={errors}
                formData={formData}
              />
              <InputFormElement
                displayName={"Pincode"}
                fieldType={"number"}
                name={"pincode"}
                setFieldValue={setFieldValue}
                errors={errors}
                formData={formData}
              />
              <InputFormElement
                displayName={"Address"}
                fieldType={"text"}
                name={"address"}
                setFieldValue={setFieldValue}
                errors={errors}
                formData={formData}
              />
            </VStack>
          </Box>
          {/* </VStack>
      </VStack> */}
        </Center>
      </ScrollView>
    </Box>
  );
};

export default SignpForm;
