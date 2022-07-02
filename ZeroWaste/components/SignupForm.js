import React from "react";
import {
    Center,
    Box,
    Heading,
    VStack,
    FormControl,
    Button,
    Input
} from "native-base";
import InputFormElement from "./InputFormElement";
const SignpForm = () => {
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});

    const setFieldValue = (event, fieldName) => {
        const v={...formData}
        v[fieldName] = event.target.value
        setData(v)
        setErrors({})
        console.log(formData)
    }

    const validateForm = () => {
        console.log(formData)
        let isFormValid = true;
        let errorObj = {...errors}
        if (formData['email'] == undefined) {
            errorObj['email'] = 'Email is required'
            isFormValid = false;
        } else {
            if (!validateEmail(formData['email'])) {
                errorObj['email'] = 'Email is not in correct format!'
                isFormValid = false;
            }
        }
        if (formData['password'] === undefined) {
            errorObj['password'] = 'Password is required!'
            isFormValid = false;
        }
        if (formData['confirmPass'] === undefined) {
            errorObj['confirmPass'] = 'Confirm Password is required!'
            isFormValid = false;
        }
        if (formData['mobile'] === undefined) {
            errorObj['mobile'] = 'Mobile number is required!'
            isFormValid = false;
        }
        if (formData['pincode'] === undefined) {
            errorObj['pincode'] = 'Pincode is required!'
            isFormValid = false;
        }
        if (formData['address'] === undefined) {
            errorObj['address'] = 'Address is required!'
            isFormValid = false;
        }
        setErrors(errorObj)
        return isFormValid;
    }
    
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }
    return <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="lg" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }} fontWeight="semibold">
            Welcome
          </Heading>
          <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <InputFormElement displayName={"Email"} fieldType={"email"} name={"email"} setFieldValue={setFieldValue} errors={errors}/>
            <InputFormElement displayName={"Password"} fieldType={"password"} name={"password"} setFieldValue={setFieldValue} errors={errors}/>
            <InputFormElement displayName={"Confirm Password"} fieldType={"password"} name={"confirmPass"} setFieldValue={setFieldValue} errors={errors}/>
            <InputFormElement displayName={"Mobile Number"} fieldType={"number"} name={"mobile"} setFieldValue={setFieldValue} errors={errors}/>
            <InputFormElement displayName={"Pincode"} fieldType={"number"} name={"pincode"} setFieldValue={setFieldValue} errors={errors}/>
            <InputFormElement displayName={"Address"} fieldType={"text"} name={"address"} setFieldValue={setFieldValue} errors={errors}/>
            <Button mt="2" colorScheme="indigo" onPress={validateForm}>
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center>;
  };

  export default SignpForm;