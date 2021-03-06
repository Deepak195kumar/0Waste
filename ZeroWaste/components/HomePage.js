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
  ScrollView,
  Text,
  Alert,
} from "native-base";
import Card from "./card";
import { EvilIcons } from "@expo/vector-icons";

const HomePage = (props) => {
  const [popup, setPopup] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [currNgo, setcurrNgo] = useState({});
  const [filterData, setFilterData] = useState(props.personData);

  const openModal = (currData) => {
    setPopup(!popup);
    setcurrNgo(currData);
  };

  const filterBypin = (val) => {
    let filt = [...props.personData];
    let ar = filt.filter((data) => {
      return data.pincode.includes(val);
    });
    setFilterData(ar);
  };

  const finalSub = () => {
    setPopup(false);
    setConfirm(true);
    setTimeout(() => {
      setConfirm(false);
    }, 7000);
  };

  return (
    <>
      {confirm && (
        <Alert w="100%" status="success">
          <VStack
            space={1}
            flexShrink={1}
            w="100%"
            alignItems="center"
            justifyContent="top"
          >
            <Alert.Icon size="md" />
            <Text
              fontSize="md"
              fontWeight="medium"
              _dark={{
                color: "coolGray.800",
              }}
            >
              Request received!
            </Text>

            <Box
              _text={{
                textAlign: "center",
              }}
              _dark={{
                _text: {
                  color: "coolGray.600",
                },
              }}
            >
              Thanks! for your Support for the good sake. NGO Volunteer will
              contact you shortly.
            </Box>
          </VStack>
        </Alert>
      )}
      <Box flex="1">
        <ScrollView>
          <Box w="100%">
            <VStack alignItems="center" w="100%" bg="coolGray.50" pb="10">
              <VStack w="100%" h={500}>
                <Image
                  position="absolute"
                  zIndex="-1"
                  source={require("../assets/mainImg.png")}
                  alt="Alternate Text1"
                  w="100%"
                  h={500}
                />

                <Center mt={20} w="100%">
                  <Image
                    width={80}
                    height={16}
                    source={require("../assets/splash.png")}
                    alt="Alternate Text22"
                  />

                  <Heading
                    textAlign="center"
                    w={{ base: "90%", md: "60%", lg: "48%" }}
                    color="white"
                    fontSize={{ base: "3xl", md: "3xl", lg: "3xl", xl: "4xl" }}
                    fontWeight="normal"
                    lineHeight="xs"
                    mt={10}
                  >
                    The greatest{" "}
                    <Text size="lg" color="green.500" fontWeight="bold">
                      happiness
                    </Text>{" "}
                    lies in{" "}
                    <Text size="lg" color="green.500" fontWeight="bold">
                      sharing
                    </Text>
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
                        <Icon
                          ml="1"
                          as={EvilIcons}
                          name="search"
                          size="5"
                          color="coolGray.500"
                        />
                      }
                      color="coolGray.500"
                      fontSize="md"
                      variant="unstyled"
                      placeholder="Search by Pincode"
                      // flex="1"
                      onChangeText={(text) => filterBypin(text)}
                    />
                  </Stack>
                  <Heading
                    pt={12}
                    size="lg"
                    color="green.500"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    fontWeight="bold"
                  >
                    Zer0 Waste
                  </Heading>
                </Center>
              </VStack>
            </VStack>
            <HStack space={2} w="100%" justifyContent="center">
              {filterData.length > 0 ? (
                filterData.map((val, index) => {
                  return (
                    <Card key={index} openModal={openModal} personData={val} />
                  );
                })
              ) : (
                <Text fontSize="3xl" highlight>
                  No NGO's found for your Pincode
                </Text>
              )}
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
                      <FormControl.Label>For {currNgo.name}</FormControl.Label>
                    </FormControl>
                    <FormControl mt="3">
                      <FormControl.Label>Describe</FormControl.Label>
                      <Input
                        placeholder="Please describe what you are feeding today"
                        h="100"
                      />
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
                          finalSub();
                        }}
                        colorScheme="purple"
                      >
                        Submit
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </Center>
          )}
        </ScrollView>
      </Box>
    </>
  );
};
export default HomePage;
