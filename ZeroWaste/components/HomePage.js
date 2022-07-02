import React, { useState } from "react";
import { Box, VStack, Image } from "native-base";
//import childImg from "../assets/childHungry.png";

const HomePage = () => {
  return (
    <>
      <Box w="100%">
        <VStack alignItems="center" w="100%" bg="coolGray.50" pb="10">
          <VStack w="100%" h={500}>
            <Image
              position="absolute"
              zIndex="-1"
              src={require("../assets/mainImg.png")}
              alt="Alternate Text"
              w="100%"
              h={500}
            />
          </VStack>
        </VStack>
      </Box>
    </>
  );
};
export default HomePage;
