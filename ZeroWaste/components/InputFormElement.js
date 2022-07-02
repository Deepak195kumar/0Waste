import React from "react";
import {
    FormControl,
    Button,
    Input
} from "native-base"
const InputFormElement = (props) => {
    console.log(props.errors)
    return <FormControl isRequired>
        <FormControl.Label>{props.displayName}</FormControl.Label>
        <Input type={props.fieldType} onChange={(e) => props.setFieldValue(e, props.name)} />
        {`${props.name}` in props.errors ? <span style={{color: 'red'}}>{props.errors[props.name]}</span> : null}
    </FormControl>; 
}

export default InputFormElement;