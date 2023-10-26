import React from "react";
import {
  body_text,
  body_text2,
  body_text3,
} from "../../Style/Style";
import { Flex, Img, Text, VStack } from "@chakra-ui/react";
function HeaderCard({ pageType, title, subTitle, description }) {
  let imageUrl;
  switch (pageType) {
    case "home":
      imageUrl = require("../../Images/homeCard.png");
      break;
    case "about":
      imageUrl = require("../../Images/aboutCard.png");
      break;
    case "service":
      imageUrl = require("../../Images/serviceCard.png");
      break;
    case "help":
      imageUrl = require("../../Images/homeCard.png");
      break;
    case "mainhub":
      imageUrl = require("../../Images/mainCard.png");
      break;
    default:
      imageUrl = require("../../Images/homeCard.png");
      break;
  }

  return (
    <Flex
      flexDirection="column"
      align="center"
      marginTop={{ base: "59px" }}
      marginBottom={{ base: "40px", md: "30px", lg: "50px" }}
    >
      <Img
        position="relative"
        src={imageUrl}
        alt="page1"
        height={{ base: "290px", md: "350px", lg: "auto" }}
      />
      <VStack
        position="absolute"
        align="center"
        marginTop={{ base: "40px", lg: "100px" }}
        gap={false}
      >
        <Text
          {...body_text}
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          color="white"
          fontSize={{ base: "24px", md: "48px", lg: "48px" }}
          textAlign="center"
          paddingLeft="10px"
          paddingRight="10px"
        >
          {title}
        </Text>
        <Text
          {...body_text2}
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          color="white"
          marginTop={{ base: "none", md: "-9px", lg: "-15px" }}
          fontSize={{ base: "27px", md: "48px", lg: "48px" }}
        >
          {subTitle}
        </Text>
        <Text
          {...body_text3}
          textAlign={{ base: "center" }}
          fontSize={{ base: "16px", md: "22px", lg: "24px" }}
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          color="white"
          width={{ base: "auto", md: "auto", lg: "700px" }}
          paddingLeft="10px"
          paddingRight="10px"
        >
          {description}
        </Text>
      </VStack>
    </Flex>
  );
}

export default HeaderCard;
