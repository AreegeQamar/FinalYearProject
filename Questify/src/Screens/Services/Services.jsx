import React, { useEffect, useState } from "react";
import { about_text3, body_pic, body_text } from "../../Style/Style";
import { Flex, Text } from "@chakra-ui/react";
import HeaderCard from "../Header/HeaderCard";
import Loading from "../../Component/Loading";
import { useNavigate } from "react-router-dom";
import ServiceBlock from "./ServiceBlock";

function Service() {
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

  return (
    <>
      <HeaderCard
        pageType="service"
        title="Learn Beyond Limits"
        description={
          <>VR-Enhanced Education: Where Imagination Meets Knowledge</>
        }
      />
      <Flex
        flexDirection="column"
        {...body_pic}
        alignItems={{ base: "center", md: "center", lg: "none" }}
        justifyContent={{ base: "center", lg: "space-between" }}
        gap={{ base: "15px", md: "20px", lg: "24px" }}
        marginBottom="24px"
      >
        <Text {...body_text} alignSelf="flex-start">
          Services
        </Text>
        <Text
          {...about_text3}
          fontSize="20px"
          color="black"
          textAlign="justify"
        >
          Our website is committed to delivering a comprehensive range of
          services designed to meet your diverse needs and expectations. Whether
          you're seeking immersive educational experiences, interactive learning
          opportunities, or specialized content, we have you covered. Our
          services encompass everything from live virtual classes and
          interactive simulations to a wealth of educational resources,
          including textbooks, video lectures, and study materials.
        </Text>
        <ServiceBlock />
        <Text
          {...about_text3}
          fontSize="20px"
          color="black"
          textAlign="justify"
        >
          In Questify, we are at the forefront of a transformative educational
          revolution. Our dedication to harnessing the immersive capabilities of
          virtual reality is not just about technology; it's about changing
          lives. We believe that education should be an adventure, a journey of
          discovery that transcends physical boundaries. With our
          state-of-the-art VR solutions, we're making this vision a reality.
          Through virtual reality, we create environments where learning is an
          experience, not a chore. Students step into historical events, explore
          distant planets, or dissect a virtual frog with the same enthusiasm
          they bring to their favorite video games. We empower educators to
          spark curiosity, ignite creativity, and nurture critical thinking in
          ways previously unattainable.
        </Text>

        <Text
          {...about_text3}
          fontSize="20px"
          color="black"
          textAlign="justify"
        >
          Our commitment extends beyond the classroom, reaching lifelong
          learners, training professionals, and revolutionizing how knowledge is
          acquired and applied. With each VR experience, we're paving the way
          for a future where education is inclusive, accessible, and profoundly
          engaging.
        </Text>
      </Flex>
    </>
  );
}

export default Service;
