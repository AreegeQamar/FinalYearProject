import {
  Box,
  Divider,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useBreakpointValue,
  Img,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  menuOptionStyle,
  dividerStyle,
  menu_bar,
  underlineColor,
} from "../../Style/Style";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";

import questifylogo from "../../Images/Questify.svg";
import signupLogo from "../../Images/SignUp.svg";
import Login from "../Popup/login";
import { CloseIcon } from "@chakra-ui/icons";
import SignIn from "../Popup/Signup";
import ContactUs from "../Contact/Contactus";

function Header() {
  const { pathname } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSignupOpen, setIsModalSignupOpen] = useState(false);

  const [isModalContactOpen, setIsModalContactOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const displayMenu = useBreakpointValue({ base: "none", lg: "flex" });
  const handleLoginClick = () => {
    setIsModalOpen(true);
  };
  const handleSignupClick = () => {
    setIsModalSignupOpen(true);
  };
  const handleCloseSignupModal = () => {
    setIsModalSignupOpen(false);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleContactClick = () => {
    setIsModalContactOpen(true);
  };
  const handleCloseContactModal = () => {
    setIsModalContactOpen(false);
  };
  const handlequestifylogo = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Flex {...menu_bar} zIndex={999}>
        <Box cursor="pointer">
          <Img
            onClick={handlequestifylogo}
            src={questifylogo}
            height={{ base: "35.46px", md: "51.06px", lg: "55.08px" }}
            width={{ base: "148.6px", md: "229.55px", lg: "258.6px" }}
          />
        </Box>
        <Flex
          display={displayMenu}
          flexDirection="row"
          gap={4}
          marginTop={{ base: "none", lg: "-26px" }}
        >
          <Flex gap={7}>
            <Link
              to="/"
              className={
                pathname === "/home" || pathname === "/" ? "active" : ""
              }
              style={{
                ...menuOptionStyle,
                fontStyle: "Source Code Pro",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={pathname === "/about" ? "active" : ""}
              style={{
                ...menuOptionStyle,
              }}
            >
              About
            </Link>
            <Link
              to="/service"
              className={pathname === "/service" ? "active" : ""}
              style={{
                ...menuOptionStyle,
              }}
            >
              Service
            </Link>
            <Link
              style={{
                ...menuOptionStyle,
              }}
              onClick={handleContactClick}
            >
              Contact Us
            </Link>

            <Modal
              isOpen={isModalContactOpen}
              onClose={handleCloseContactModal}
              size="xl"
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <IconButton
                    aria-label="Close"
                    icon={<CloseIcon />}
                    size="md"
                    color="#BFBBBB"
                    fontWeight="bold"
                    onClick={handleCloseContactModal}
                  />
                </ModalHeader>

                <ModalBody>
                  <ContactUs />
                </ModalBody>
                <ModalFooter></ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
          <Divider {...dividerStyle} />
          <Link
            style={{
              ...menuOptionStyle,
            }}
            onClick={handleLoginClick}
          >
            Log In
          </Link>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <IconButton
                  aria-label="Close"
                  icon={<CloseIcon />}
                  size="md"
                  color="#BFBBBB"
                  fontWeight="bold"
                  onClick={handleCloseModal}
                />
              </ModalHeader>

              <ModalBody>
                <Login />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
          <Box marginTop="32px" cursor="pointer">
            <img
              src={signupLogo}
              alt="signup"
              width="70px"
              height="70px"
              onClick={handleSignupClick}
            />
          </Box>
          <Modal
            isOpen={isModalSignupOpen}
            onClose={handleCloseSignupModal}
            size="xl"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <IconButton
                  aria-label="Close"
                  icon={<CloseIcon />}
                  size="md"
                  color="#BFBBBB"
                  fontWeight="bold"
                  onClick={handleCloseSignupModal}
                />
              </ModalHeader>

              <ModalBody>
                <SignIn />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
        <IconButton
          backgroundColor={"purple.100"}
          _hover={"purple.50"}
          icon={<HamburgerIcon />}
          display={{ base: "flex", lg: "none" }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader color={underlineColor} fontWeight={700}>
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDirection="column">
              <Link
                to="/"
                className={pathname === "/home" || pathname === "/"}
                style={{
                  ...menuOptionStyle,
                }}
                onClick={onClose}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={pathname === "/about"}
                style={{
                  ...menuOptionStyle,
                }}
                onClick={onClose}
              >
                About
              </Link>
              <Link
                to="/service"
                className={pathname === "/service"}
                style={{
                  ...menuOptionStyle,
                }}
                onClick={onClose}
              >
                Service
              </Link>
              <Link
                to="/blog"
                className={pathname === "/blog"}
                style={{
                  ...menuOptionStyle,
                }}
                onClick={onClose}
              >
                Contact us
              </Link>
              <Divider marginTop={5} borderColor={underlineColor} />
              <Flex
                ml={2}
                alignItems="center"
                marginTop={6}
                flexDirection="column"
              >
                <Link
                  style={{
                    ...menuOptionStyle,
                  }}
                  onClick={handleLoginClick}
                >
                  Log In
                </Link>
                <Modal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  size="xl"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader
                      display="flex"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <IconButton
                        aria-label="Close"
                        icon={<CloseIcon />}
                        size="md"
                        color="#BFBBBB"
                        fontWeight="bold"
                        onClick={handleCloseModal}
                      />
                    </ModalHeader>

                    <ModalBody>
                      <Login />
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                  </ModalContent>
                </Modal>

                <Box cursor="pointer" marginTop="20px">
                  <img
                    src={signupLogo}
                    alt="signup"
                    width="70px"
                    height="70px"
                    onClick={handleSignupClick}
                  />
                </Box>
                <Modal
                  isOpen={isModalSignupOpen}
                  onClose={handleCloseSignupModal}
                  size="xl"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader
                      display="flex"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <IconButton
                        aria-label="Close"
                        icon={<CloseIcon />}
                        size="md"
                        color="#BFBBBB"
                        fontWeight="bold"
                        onClick={handleCloseSignupModal}
                      />
                    </ModalHeader>

                    <ModalBody>
                      <SignIn />
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                  </ModalContent>
                </Modal>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
