import React, { useEffect, useState } from "react";
import {
  body,
  body_pic,
  body_text,
  about_text3,
  aboutText,
  body_Button,
} from "../../Style/Style";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import HeaderCard from "../Header/HeaderCard";
import Loading from "../../Component/Loading";
import { useNavigate } from "react-router-dom";
import mainhub from "../../Images/mainhub.svg";

function Mainhub() {
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
        pageType="mainhub"
        title="Unlock the Power of Knowledge"
        subTitle="Turn Theory into Reality"
        description={
          <>
            {" "}
            Prepare to explore, learn, and thrive in this limitless virtual
            land.scape of education
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
          <Text
            {...body_text}
            paddingBottom={{ base: "20px", lg: "50px" }}
            
          >
            Main Hub
          </Text>
          <Text
            {...about_text3}
            fontSize="20px"
            color="black"
            marginBottom="20px"
          >
            Welcome to the immersive world of Virtual Reality Education! As you
            stand in the heart of our educational hub, you are presented with
            two exciting options to embark on your learning journey: "Classes"
            and "Practicals."
          </Text>
          <Text
            {...about_text3}
            fontSize="20px"
            color="black"
            marginBottom="20px"
          >
            <strong>Classes:</strong> Step into our virtual classrooms where
            knowledge comes to life. Engage in dynamic lectures led by renowned
            educators and subject matter experts. Whether you're delving into
            the depths of history, exploring the wonders of science, or
            mastering new languages, our classes are designed to inspire
            curiosity and foster a deep understanding of your chosen subjects.
          </Text>

          <Text
            {...about_text3}
            fontSize="20px"
            color="black"
            marginBottom="20px"
          >
            <strong>Practicals:</strong> Are you ready to put theory into
            practice? Enter our virtual laboratory or simulation environments,
            where you'll have the opportunity to experiment, apply your
            knowledge, and refine your skills. From conducting complex physicss
            experiments to exploring virtual ecosystems, the practicals option
            is where you'll turn learning into hands-on experience.
          </Text>

          <Text
            {...about_text3}
            fontSize="20px"
            color="black"
            marginBottom="20px"
          >
            No matter which path you choose, you'll find a world of knowledge at
            your fingertips. So, whether you're a lifelong learner seeking to
            expand your horizons or a student eager to excel, Virtual Reality
            Education is here to make your educational journey engaging,
            interactive, and unforgettable. Step into the future of learning and
            choose your next adventure!
          </Text>
        </Box>

        <Flex
          flexDir={{ base: "column", lg: "row" }}
          alignItems={{ base: "center", md: "center", lg: "flex-start" }}
          gap={{ base: 4, lg: "122px" }}
        >
          <Flex
            alignItems={{ base: "center", md: "center", lg: "flex-start" }}
            marginTop="10px"
            marginLeft={{ base: "none", md: "none", lg: "4%" }}
          >
            <Img src={mainhub} alt="mainhub" />
          </Flex>
          <Flex
            flexDirection="column"
            gap={{ base: "10px", md: "20px", lg: "50px" }}
            marginTop={{ base: "20px", md: "30px", lg: "120px" }}
          >
            <Button {...body_Button}>Online Classes</Button>
            <Button {...body_Button}>Practicals</Button>
          </Flex>
        </Flex>

        <Box>
          <Text
            {...about_text3}
            fontSize="20px"
            color="black"
            marginBottom="20px"
            marginTop="50px"
          >
            The power to shape your educational destiny is in your hands. Make
            your choice and let the adventure unfold. Education has never been
            so immersive and exciting. Step into your chosen world and embrace
            the future of learning! Whichever path you choose, remember that
            knowledge is the key that unlocks the doors to new opportunities.
            Explore, learn, and thrive in this limitless virtual landscape of
            education. Your journey awaits!"
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default Mainhub;
