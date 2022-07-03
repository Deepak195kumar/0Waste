import React from "react";
import { FormControl, Button, Input, Text } from "native-base";
const InputFormElement = (props) => {
  return (
    <FormControl isRequired>
      <FormControl.Label>{props.displayName}</FormControl.Label>
      <Input
        type={props.fieldType}
        onChangeText={(text) => props.setFieldValue(text, props.name)}
        value={props.formData[props.name]}
        placeholder={`Enter ${props.name} `}
      />
      {`${props.name}` in props.errors ? (
        <Text style={{ color: "red" }}>{props.errors[props.name]}</Text>
      ) : null}
    </FormControl>
  );
};

export default InputFormElement;
