import React from "react";
import { Box, Grid, Img, Text } from "@chakra-ui/react";
import { blog_text,home_Text } from "../../Style/Style";
import servicebox1 from "../../Images/servicebox1.svg";
import servicebox2 from "../../Images/servicebox2.svg";
import servicebox3 from "../../Images/servicebox3.svg";
import servicebox4 from "../../Images/servicebox4.svg";
import servicebox5 from "../../Images/servicebox5.svg";
import servicebox6 from "../../Images/servicebox6.svg";


function ServiceBlock() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      columnGap={{ base: "20px", lg: "70px" }}
      rowGap={{ base: "20px", lg: "38px" }}
      paddingBottom={{ base: "40px", md: "59px", lg: "60px" }}
    >
      <Box borderRadius="312px 312px 40px 40px" background="#FBF2FF">
        <Img
          marginLeft="38%"
          marginTop="50px"
          height="80px"
          width="80px"
          src={servicebox1}
          alt="Your Image"
        />
        <Text
          {...blog_text}
          fontSize="20px"
          textAlign="center"
          marginTop="15px"
        >
          Student Engagement Platforms
        </Text>
        <Text
          {...home_Text}
          margin="20px 21px 20px 21px"
          paddingRight="2px"
          color="#666666"
          textAlign="justify"
        >
          Interactive platforms that encourage student participation and
          collaboration within VR environments, enhancing engagement and
          learning outcomes.
        </Text>
      </Box>

      <Box borderRadius="312px 312px 40px 40px" background="#FBF2FF">
        <Img
          marginLeft="38%"
          marginTop="50px"
          height="80px"
          width="80px"
          src={servicebox2}
          alt="servicebox2"
        />
        <Text
          {...blog_text}
          fontSize="20px"
          textAlign="center"
          marginTop="15px"
        >
          Virtual Physics Labs
        </Text>
        <Text
          {...home_Text}
          margin="20px 21px 20px 21px"
          color="#666666"
          textAlign="justify"
          paddingRight="2px"
        >
          Virtual physics laboratories equipped with a range of experiments and
          simulations, allowing students to conduct experiments safely and
          without physical equipment. Real-time data collection and analysis
          tools for physics experiments.
        </Text>
      </Box>

      <Box borderRadius="312px 312px 40px 40px" background="#FBF2FF">
        <Img
          marginLeft="38%"
          marginTop="50px"
          height="80px"
          width="80px"
          src={servicebox3}
          alt="servicebox3"
        />
        <Text
          {...blog_text}
          fontSize="20px"
          textAlign="center"
          marginTop="15px"
        >
          Consultation Services
        </Text>
        <Text
          {...home_Text}
          margin="20px 21px 20px 21px"
          color="#666666"
          textAlign="justify"
          paddingRight="2px"
        >
          Consultation on VR adoption strategies for educational institutions,
          including cost-benefit analysis and implementation plans. Guidance on
          selecting the most suitable VR solutions for specific educational
          goals.
        </Text>
      </Box>

      <Box borderRadius="312px 312px 40px 40px" background="#FBF2FF">
        <Img
          marginLeft="38%"
          marginTop="50px"
          height="80px"
          width="80px"
          src={servicebox4}
          alt="servicebox4"
        />
        <Text
          {...blog_text}
          fontSize="20px"
          textAlign="center"
          marginTop="15px"
        >
          Teacher Training and Resources
        </Text>
        <Text
          {...home_Text}
          margin="20px 21px 20px 21px"
          color="#666666"
          textAlign="justify"
          paddingRight="2px"
        >
          Workshops and training programs to help educators integrate VR
          technology into their teaching methods effectively. Access to a
          library of educational resources, lesson plans, and best practices for
          using VR in the classroom.
        </Text>
      </Box>

      <Box borderRadius="312px 312px 40px 40px" background="#FBF2FF">
        <Img
          marginLeft="38%"
          marginTop="50px"
          height="80px"
          width="80px"
          src={servicebox5}
          alt="servicebox5"
        />
        <Text
          {...blog_text}
          fontSize="20px"
          textAlign="center"
          marginTop="15px"
        >
          Research and Development
        </Text>
        <Text
          {...home_Text}
          margin="20px 21px 20px 21px"
          color="#666666"
          textAlign="justify"
          paddingRight="2px"
        >
          Conducting research on the effectiveness of VR in education and
          physics labs, and sharing findings with the educational community.
          Collaboration with educational researchers and institutions on
          VR-related studies and projects.
        </Text>
      </Box>

      <Box borderRadius="312px 312px 40px 40px" background="#FBF2FF">
        <Img
          marginLeft="38%"
          marginTop="50px"
          height="80px"
          width="80px"
          src={servicebox6}
          alt="Your Image"
        />
        <Text
          {...blog_text}
          fontSize="20px"
          textAlign="center"
          marginTop="15px"
        >
          Interactive Sessions
        </Text>
        <Text
          {...home_Text}
          margin="20px 21px 20px 21px"
          color="#666666"
          textAlign="justify"
          paddingRight="2px"
        >
          Conduct live lectures, discussions, and interactive sessions in VR
          where students and instructors can communicate and collaborate in
          real-time. Use features like spatial audio to simulate a real
          classroom experience.
        </Text>
      </Box>
    </Grid>
  );
}

export default ServiceBlock;
