import React, { Component } from "react";
import { Text, Input, Button, Flex, Image, Textarea } from "@chakra-ui/react";
import { body_Button2, centeredpurple } from "../../Style/Style";
import emailjs from "@emailjs/browser";
import contactus from "../../Images/contactus.svg";

class ContactUs extends Component {
  render() {
    const sendEmail = () => {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const templateParams = {
        from_name: name,
        message: message,
        reply_to: email,
      };
      if (!templateParams.reply_to) {
        alert("Please enter Email");
      } else {
        emailjs
          .send(
            "service_wiklsx6",
            "template_wxkgcmt",
            templateParams,
            "MObVYjGjZc0HOBnxL"
          )
          .then((response) => {
            console.log("Email sent successfully!", response);
            alert("Email sent successfully!");
          })
          .catch((error) => {
            console.error("Error sending email:", error);
            alert("Error sending email. Please try again later.");
          });
      }
    };
    return (
      <Flex flexDirection="column" style={{ textAlign: "center" }} gap="19px">
        <Text style={centeredpurple} mt="4">
          Contact Us
        </Text>
        <Flex flexDirection="row">
          <Flex>
            <Text textAlign="justify">
              Thank you for your interest in our virtual reality programming
              education project. For questions or inquiries, please don't
              hesitate to contact us.
            </Text>
          </Flex>
          <Flex>
            <Image src={contactus} alt="SVG Image" mt="4" />
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap={3}>
          <Flex gap={3}>
            <Input
              borderColor="black"
              placeholder="Name"
              borderRadius="40px"
              height="60px"
              color="black"
              id="name"
            />
            <Input
              borderColor="black"
              placeholder="Email"
              borderRadius="40px"
              height="60px"
              color="black"
              id="email"
            />
          </Flex>
          <Textarea
            paddingTop="20px"
            placeholder="Type your message here..."
            borderColor="black"
            borderRadius="40px"
            height="180px"
            color="black"
            id="message"
          />
          <Button
            {...body_Button2}
            height="60px"
            marginTop="0px"
            onClick={sendEmail}
          >
            Send
          </Button>
        </Flex>
      </Flex>
    );
  }
}

export default ContactUs;
