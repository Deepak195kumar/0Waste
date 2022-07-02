import React, { useState } from "react";
import {
  Box,
  VStack,
  Image,
  Center,
  Heading,
  Stack,
  Icon,
  Input,
  HStack,
  FormControl,
  Modal,
  Button,
} from "native-base";
import Card from "./card";
//import popModal from "./popModal";

const HomePage = () => {
  const [popup, setPopup] = useState(false);
  const openModal = () => {
    setPopup(!popup);
    console.log(popup);
  };

  return (
    <>
      <Box w="100%">
        <VStack alignItems="center" w="100%" bg="coolGray.50" pb="10">
          <VStack w="100%" h={500}>
            <Image
              position="absolute"
              zIndex="-1"
              src={require("../assets/mainImg.png")}
              alt="Alternate Text1"
              w="100%"
              h={500}
            />

            <Center mt={20} w="100%">
              <Image
                width={80}
                height={16}
                src={require("../assets/splash.png")}
                alt="Alternate Text22"
              />

              <Heading
                textAlign="center"
                w={{ base: "90%", md: "60%", lg: "48%" }}
                color="white"
                fontSize={{ base: "3xl", md: "3xl", lg: "3xl", xl: "4xl" }}
                fontWeight="normal"
                //  fontWeight="semibold"
                lineHeight="xs"
                mt={10}
                mx={{ base: 10 }}
                //  _dark={{}}
              >
                The greatest happiness lies in sharing
              </Heading>

              <Stack
                direction={{ md: "row" }}
                bg="white"
                space="3"
                alignItems={{ base: "stretch", md: "center" }}
                w={{ base: "60%", lg: "48%" }}
                p={2}
                mt={12}
                borderRadius="lg"
              >
                <Input
                  leftElement={
                    <Icon ml="1" name="search1" size="5" color="coolGray.500" />
                  }
                  color="coolGray.500"
                  fontSize="md"
                  variant="unstyled"
                  placeholder="Search by Pincode"
                  flex="1"
                />
              </Stack>
            </Center>
          </VStack>
        </VStack>
        <HStack space={4} w="100%" justifyContent="center">
          <Card openModal={openModal} />
          <Card openModal={openModal} />
          <Card openModal={openModal} />
          <Card openModal={openModal} />
        </HStack>
      </Box>
      {popup && (
        <Center>
          <Modal isOpen={popup} onClose={() => setPopup(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              <Modal.Header>Contact Us</Modal.Header>
              <Modal.Body>
                <FormControl>
                  <FormControl.Label>Name</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Email</FormControl.Label>
                  <Input />
                </FormControl>
              </Modal.Body>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="ghost"
                    colorScheme="blueGray"
                    onPress={() => {
                      setPopup(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onPress={() => {
                      setPopup(false);
                    }}
                    colorScheme="purple"
                  >
                    Save
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Center>
      )}
    </>
  );
};
export default HomePage;
