import React, { useEffect, useState } from "react";
import {
  body,
  body_pic,
  body_text,
  about_text3,
  aboutText,
} from "../../Style/Style";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import HeaderCard from "../Header/HeaderCard";
import Loading from "../../Component/Loading";

function About() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time as needed
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <HeaderCard
        pageType="about"
        title="Transforming Education Through Virtual Reality"
        description={
          <>
            Unlock a world of infinite possibilities in education with virtual
            reality
          </>
        }
      />
      <Flex
        {...body_pic}
        flexDir={{ base: "column", lg: "column" }}
        gap={{ base: 4, lg: "20px" }}
        justifyContent={{ base: "center", lg: "none" }}
        alignItems={{ base: "center", lg: "baseline" }}
      >
        <Box>
          <Text {...body_text} paddingBottom={{ base: "20px", lg: "50px" }}>
            About Us
          </Text>
          <Text
            {...about_text3}
            fontSize="20px"
            color="black"
            textAlign="justify"
          >
            Welcome to VR in Education, where we are passionate about
            revolutionizing the way students learn through immersive virtual
            reality experiences. Our mission is to harness the power of VR
            technology to inspire, engage, and empower learners of all ages. VR
            in Education is proud to partner with leading educational
            institutions, schools, and organizations that share our commitment
            to innovative learning. Together, we are shaping the future of
            education by integrating VR into curricula, conducting research, and
            exploring new horizons in teaching and learning.
          </Text>
        </Box>

        <Flex
          flexDir={{ base: "column", lg: "row-reverse" }}
          alignItems={{ base: "center", md: "center", lg: "flex-start" }}
          gap={{ base: 4, lg: "122px" }}
        >
          <Flex
            alignItems={{ base: "center", md: "center", lg: "flex-start" }}
            marginTop="10px"
          >
            <Img src={require("../../Images/about.png")} alt="About" />
          </Flex>
          <Flex {...body} width={{ base: "full", lg: "60%" }} marginTop="50px">
            <Text
              {...aboutText}
              marginBottom={{ base: "20px", md: "20px", lg: "30px" }}
            >
              Impact on education
            </Text>
            <Text
              {...about_text3}
              fontSize="20px"
              color="black"
              width={{ base: "auto", md: "auto", lg: 570 }}
              textAlign="justify"
            >
              We firmly believe that VR technology can transform education by
              making learning more interactive and enjoyable. Students are more
              motivated to learn when they can explore historical sites, dive
              into the human body, or travel to distant planets in VR.The
              immersive nature of VR helps students remember what they've
              learned, leading to higher retention rates and better academic
              performance.VR breaks down geographical barriers and provides
              access to educational experiences that might otherwise be out of
              reach.
            </Text>
          </Flex>
        </Flex>
        <Flex
          gap="10%"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          marginTop="50px"
          marginBottom="50px"
        >
          <Flex flexDirection="column">
            <Text {...aboutText}>Mission</Text>
            <Text
              {...about_text3}
              fontSize="20px"
              color="black"
              width={{ base: "auto", md: "auto", lg: "100%" }}
            >
              At VR in Education, our mission is to pioneer the transformation
              of education by harnessing the power of virtual reality. We are
              dedicated to reshaping the way students learn, teachers instruct,
              and knowledge is shared. Our commitment is to provide accessible,
              immersive, and enriching educational experiences that inspire,
              empower, and prepare learners of all ages for a rapidly evolving
              world.
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text {...aboutText}>Vision</Text>
            <Text
              {...about_text3}
              fontSize="20px"
              color="black"
              width={{ base: "auto", md: "auto", lg: "100%" }}
            >
              OAt VR in Education, we envision a future where education knows no
              boundaries. We believe that virtual reality has the potential to
              break down the traditional classroom walls and transport learners
              to new worlds of knowledge. Our vision is to make high-quality,
              immersive educational experiences accessible to every student,
              regardless of their location or background.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default About;
