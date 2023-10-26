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
  import React from "react";
  import { Link, useLocation, useNavigate } from "react-router-dom";
  import {
    menuOptionStyle,
    dividerStyle,
    menu_bar,
    underlineColor,
  } from "../../Style/Style";

  
  import questifylogo from "../../Images/Questify.svg";
  import Signout from "../../Images/Signout.svg";
  
  function HeaderLogin() {
    const { pathname } = useLocation();
  
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const displayMenu = useBreakpointValue({ base: "none", lg: "flex" });

    const handlequestifylogo = () => {
      window.location.href = "/";
    };
    const navigate = useNavigate();

    const handleSignOut = () => {
    window.history.replaceState(null, 'Home', '/');
    navigate('/');
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
                to="/Mainhub"
                className={
                  pathname === "/Mainhub" ? "active" : ""
                }
                style={{
                  ...menuOptionStyle,
                  fontStyle: "Source Code Pro",
                }}
              >
                Main Hub
              </Link>
              <Link
                to="/onlineClass"
                className={pathname === "/onlineClass" ? "active" : ""}
                style={{
                  ...menuOptionStyle,
                }}
              >
                Online Classes
              </Link>
              <Link
                to="/Practicals"
                className={pathname === "/Practicals" ? "active" : ""}
                style={{
                  ...menuOptionStyle,
                }}
              >
                Practical
              </Link>
              <Link
                to="/Results"
                className={pathname === "/Results" ? "active" : ""}
                style={{
                  ...menuOptionStyle,
                }}
              >
                Result
              </Link>
            </Flex>
            <Divider {...dividerStyle} />
            
            <Box marginTop="32px" cursor="pointer">
              <img
                src={Signout}
                alt="signup"
                width="70px"
                height="70px"
                onClick={handleSignOut}
              />
            </Box>
            
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
                  to="/Mainhub"
                  className={pathname === "/Mainhub" }
                  style={{
                    ...menuOptionStyle,
                  }}
                  onClick={onClose}
                >
                  Main Hub
                </Link>
                <Link
                  to="/onlineClass"
                  className={pathname === "/onlineClass"}
                  style={{
                    ...menuOptionStyle,
                  }}
                  onClick={onClose}
                >
                  Online Classes
                </Link>
                <Link
                  to="/Practicals"
                  className={pathname === "/Practicals"}
                  style={{
                    ...menuOptionStyle,
                  }}
                  onClick={onClose}
                >
                  Practical
                </Link>
                <Link
                  to="/Results"
                  className={pathname === "/Results"}
                  style={{
                    ...menuOptionStyle,
                  }}
                  onClick={onClose}
                >
                  Result
                </Link>
                <Divider marginTop={5} borderColor={underlineColor} />
                <Flex
                  ml={2}
                  alignItems="center"
                  marginTop={6}
                  flexDirection="column"
                >
  
                  <Box cursor="pointer" marginTop="20px">
                    <img
                      src={Signout}
                      alt="signup"
                      width="70px"
                      height="70px"
                      onClick={handleSignOut}
                    />
                  </Box>
                  
                </Flex>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  
  export default HeaderLogin;
  