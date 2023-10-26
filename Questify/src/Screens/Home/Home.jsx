import React, { useEffect, useState } from "react";
import { body_pic, body_text } from "../../Style/Style";
import { Flex, Text } from "@chakra-ui/react";

import HomeCard from "./HomeCard";

import HeaderCard from "../Header/HeaderCard";
import Loading from "../../Component/Loading";
import { useNavigate } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time as needed
  }, []);

  if (loading) {
    return <Loading />;
  }

  const loadingPage = () => {
    navigate("/contact");
  };
  return (
    <>
      <HeaderCard
        pageType="home"
        title="Endless journey of knowledge"
        subTitle="Boundless possibilities"
        description={<>Dive into endless learning with VR in education.</>}
      />
      <Flex
        flexDirection="column"
        {...body_pic}
        alignItems={{ base: "center", md: "center", lg: "none" }}
        justifyContent={{ base: "center", lg: "space-between" }}
        gap={{ base: "35px", md: "39px", lg: "50px" }}
      >
        <Text {...body_text} alignSelf="flex-start">
          Learning Module
        </Text>
        <HomeCard />
      </Flex>
    </>
  );
}

export default Home;
