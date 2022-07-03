import React, { useState } from "react";
import {
  NativeBaseProvider,
  extendTheme,
  Center,
  Spinner,
  HStack,
} from "native-base";
import HomePage from "./components/HomePage";
import SignpForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const [currScreen, setCurrScreen] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [dat, setDat] = React.useState({});
  const [personData, setPersonData] = useState([
    {
      name: " Charity Organization",
      email: "mmmmm@gmail.com",
      mobileNo: "7353738516",
      password: "$2a$10$AtUUoIbhfaP2yqMozWmTGOLV45AGw49tS20Z/XP8m.xkIh1u6gjQO",
      pincode: "560011",
      address: "#76, 1st Cross, 7th Main, Jayanagar 2nd Block,Bangalore-560011",
      isValid: true,
      nopeople: 400,
    },
    {
      name: "CRY (Child Rights and You)",
      email: "amma@gmail.com",
      mobileNo: "7353738516",
      password: "$2a$10$AtUUoIbhfaP2yqMozWmTGOLV45AGw49tS20Z/XP8m.xkIh1u6gjQO",
      pincode: "573201",
      address: "bznzbzb xhsjsjnxhxhs",
      isValid: true,
      nopeople: 750,
    },
    {
      name: "CRY (Child Rights and You)",
      email: "amma@gmail.com",
      mobileNo: "7353738516",
      password: "$2a$10$AtUUoIbhfaP2yqMozWmTGOLV45AGw49tS20Z/XP8m.xkIh1u6gjQO",
      pincode: "573444",
      address: "bsddksjdcb sdfsdfsdfsdf sdfsdfsdfsdferf ewf xhsjsjnxhxhs",
      isValid: true,
      nopeople: 100,
    },
  ]);

  const nxt = (val) => {
    setCurrScreen(currScreen + 1);
    setDat(val);
    setSubmitting(false);
  };
  const submitTrue = () => {
    setSubmitting(true);
  };

  return (
    <NativeBaseProvider>
      {currScreen == 1 && (
        <SignpForm nxt={nxt} submitting={submitting} submitTrue={submitTrue} />
      )}
      {currScreen == 2 && (
        <SigninForm
          nxt={nxt}
          dat={dat}
          submitting={submitting}
          submitTrue={submitTrue}
        />
      )}
      {currScreen == 3 && <HomePage personData={personData} />}
    </NativeBaseProvider>
  );
}
