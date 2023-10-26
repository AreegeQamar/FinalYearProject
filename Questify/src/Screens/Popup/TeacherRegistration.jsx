import React, { Component } from "react";
import { Text, Input, Button, Flex } from "@chakra-ui/react";
import {
  body_Button2,
  centeredpurple,
  inputFieldStyle,
} from "../../Style/Style";
class TeacherRegistration extends Component {
  render() {
    return (
      <Flex flexDirection="column" style={{ textAlign: "center" }} gap="19px">
        <Text style={centeredpurple} mt="4">
          Teachers Registration
        </Text>
        <Flex mt="10px" flexDirection="column" gap="15px" px="20px">
          <Input type="text" placeholder="Name" style={inputFieldStyle} />
          <Input type="text" placeholder="Email" style={inputFieldStyle} />
          <Input
            type="password"
            placeholder="Password"
            style={inputFieldStyle}
          />
          <Input
            type="text"
            placeholder="Designation"
            style={inputFieldStyle}
          />
          <Flex align="flex-start" justify="flex-start" mt="2"></Flex>
          <Button {...body_Button2}>Register</Button>
        </Flex>
      </Flex>
    );
  }
}

export default TeacherRegistration;
