import React, { Component } from "react";
import { Text, Input, Button, Flex, Select } from "@chakra-ui/react";
import {
  centeredpurple,
  inputFieldStyle,
  body_Button2
} from "../../Style/Style";
import { body_Button2 } from "../../Style/Style";
class StudentRegistration extends Component {
  render() {
    return (
      <Flex flexDirection="column" style={{ textAlign: "center" }} gap="19px">
        <Text style={centeredpurple} mt="4">
          Student Class Registration
        </Text>
        <Flex mt="10px" flexDirection="column" gap="15px" px="20px">
          <Input type="text" placeholder="Name" style={inputFieldStyle} />
          <Input type="text" placeholder="Email" style={inputFieldStyle} />
          <Input
            type="password"
            placeholder="Password"
            style={inputFieldStyle}
          />

          <Select
            placeholder="Select Class"
            style={inputFieldStyle}
            isLazy={false}
          >
            <option value="9th">9th</option>
            <option value="10th">10th</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
          </Select>

          <Flex align="flex-start" justify="flex-start" mt="2"></Flex>
          <Button {...body_Button2}>Send Request</Button>
        </Flex>
      </Flex>
    );
  }
}

export default StudentRegistration;
