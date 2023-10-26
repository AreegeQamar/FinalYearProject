import React, { useEffect, useState } from "react";
import {
  about_text3,
  service_text,
  home_Text,
} from "../../Style/Style";
import { Box, Flex, Grid, Img, Text } from "@chakra-ui/react";
import practicals from "../../Images/practicals.svg";
import classes from "../../Images/classes.svg";
import assesments from "../../Images/assesments.svg";
import results from "../../Images/results.svg";

import { useNavigate } from "react-router-dom";
import Loading from "../../Component/Loading";

function HomeCard() {
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
    <Flex
      justifyContent={{ base: "center", md: "center", lg: "flex-start" }}
      flexWrap="wrap"
      marginBottom="50px"
    >
      <Flex flexDirection="column">
        <Text
          {...about_text3}
          fontSize="20px"
          color="black"
          textAlign="justify"
          marginBottom="20px"
        >
          Virtual Reality (VR) is an emerging technology that offers a unique
          solution to these challenges. By providing students with immersive and
          interactive learning experiences, VR has the potential to engage
          students in ways that traditional teaching methods cannot. With VR,
          students can explore virtual environments, interact with virtual
          objects, and perform virtual experiments, all from the safety and
          convenience of their own homes. Moreover, VR can make distance
          learning more accessible and effective by enabling students to
          participate in virtual classrooms and practicals, regardless of their
          physical location.
        </Text>

        <Text
          {...about_text3}
          fontSize="20px"
          color="black"
          textAlign="justify"
          marginBottom="20px"
        >
          The integration of Virtual Reality (VR) in education in Pakistan
          endeavors to revolutionize the learning landscape by enhancing student
          engagement through immersive experiences, improving learning outcomes
          via practical simulations, enabling accessible distance learning for
          all students, and fostering innovative teaching methodologies that
          prepare students for the challenges of the 21st century.
        </Text>

        <Text
          {...about_text3}
          fontSize="20px"
          color="black"
          textAlign="justify"
          marginBottom="40px"
        >
          This transformative initiative seeks to create a more engaging,
          effective, and equitable educational environment that empowers
          students to excel in their academic pursuits and adapt to the evolving
          demands of the modern world.
        </Text>
      </Flex>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap="50px"
      >
        <Box
          borderRadius="20px"
          boxShadow="0px 0px 3px 0px rgba(24, 24, 24, 0.40)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          padding="20px"
        >
          <Img
            src={practicals}
            alt="practicals"
            height={150}
            width={150}
            marginTop="10px"
          />

          <Text
            {...service_text}
            marginTop="10px"
            textAlign="center"
            alignItems={{ base: "center", md: "none", lg: "none" }}
          >
            Practicals
          </Text>
          <Text
            {...home_Text}
            margin="20px 0 10px 0"
            color="#666666"
            textAlign="justify"
          >
            Unlock limitless learning with our tailored practical guides,
            exclusively crafted to empower students on their educational
            journey. Immerse yourself in hands-on experiences that enrich your
            understanding and skills. Get ready to thrive in the world of
            practical knowledge like never before.
          </Text>
        </Box>

        <Box
          borderRadius="20px"
          boxShadow="0px 0px 3px 0px rgba(24, 24, 24, 0.40)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          padding="20px"
        >
          <Img
            src={classes}
            alt="classes"
            height={150}
            width={150}
            marginLeft="20px"
            marginTop="10px"
          />
          <Text
            marginLeft="20px"
            marginTop="10px"
            {...service_text}
            textAlign="center"
            alignItems={{ base: "center", md: "none", lg: "none" }}
          >
            Classes
          </Text>
          <Text
            {...home_Text}
            margin="20px 21px 10px 21px"
            color="#666666"
            textAlign="justify"
          >
            Embark on an extraordinary learning adventure with live interactive
            classes in VR. Immerse yourself in a dynamic educational experience,
            connecting with teachers and peers. Discover new horizons of
            knowledge as you engage, collaborate, and learn in an entirely
            virtual realm. Let the world be your classroom, and knowledge your
            greatest companion.
          </Text>
        </Box>
        <Box
          borderRadius="20px"
          boxShadow="0px 0px 3px 0px rgba(24, 24, 24, 0.40)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          padding="20px"
        >
          <Img
            src={assesments}
            alt="web"
            height={150}
            width={150}
            marginLeft="20px"
            marginTop="10px"
          />
          <Text
            marginLeft="20px"
            marginTop="10px"
            {...service_text}
            textAlign="center"
            alignItems={{ base: "center", md: "none", lg: "none" }}
          >
            Assessments
          </Text>
          <Text
            {...home_Text}
            margin="20px 21px 10px 21px"
            textAlign="justify"
            color="#666666"
          >
            Experience innovative assessments that transcend traditional
            boundaries, as we harness the power of Virtual Reality to create
            immersive evaluation environments. Step into a realm of interactive
            challenges, where your skills and knowledge are put to the test like
            never before. Embrace a new era of assessments that inspire growth,
            foster creativity, and prepare you for success in the ever-evolving
            world.
          </Text>
        </Box>

        <Box
          borderRadius="20px"
          boxShadow="0px 0px 3px 0px rgba(24, 24, 24, 0.40)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          padding="20px"
        >
          <Img
            src={results}
            alt="results"
            height={150}
            width={150}
            marginLeft="20px"
            marginTop="10px"
          />
          <Text
            marginLeft="20px"
            marginTop="10px"
            {...service_text}
            textAlign="center"
            alignItems={{ base: "center", md: "none", lg: "none" }}
          >
            Results
          </Text>
          <Text
            {...home_Text}
            margin="20px 21px 10px 21px"
            color="#666666"
            textAlign="justify"
          >
            VR system provides mechanism for assessing and evaluating students
            performance within the virtual environment. It evaluates quizzes,
            assessments, or simulations to measure learning outcomes.
          </Text>
        </Box>
      </Grid>
      <Text
        {...about_text3}
        fontSize="20px"
        color="black"
        textAlign="justify"
        marginTop="30px"
      >
        With the power of virtual reality, you're no longer limited to textbooks
        and lectures. You can dive headfirst into a dynamic environment that
        transforms abstract concepts into tangible experiences. Visualize
        algorithms, interact with 3D representations, and explore code
        structures in a way that was once thought impossible. Contact Us in case
        of any issue.
      </Text>
    </Flex>
  );
}

export default HomeCard;
