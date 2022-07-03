import React, { useState } from "react";
import {
  Box,
  AspectRatio,
  Center,
  Image,
  Heading,
  Text,
  Stack,
  HStack,
  ScrollView,
} from "native-base";
import { Pressable } from "react-native";

const Card = (props) => {
  return (
    // <Pressable
    //   onPress={() => {
    //     props.openModal(props.personData);
    //   }}
    // >

    <Box
      onClick={() => {
        props.openModal(props.personData);
      }}
      flex="1"
      maxW="80"
      rounded="lg"
      //overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <ScrollView>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: "violet.400",
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            NGO
          </Center>
        </Box>
        <Stack p="4" space={4}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {props.personData.name}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: "violet.500",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {props.personData.pincode}
            </Text>
          </Stack>
          <Text fontWeight="400">{props.personData.address}</Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                {props.personData.nopeople} people
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </ScrollView>
    </Box>

    // </Pressable>
  );
};
export default Card;
