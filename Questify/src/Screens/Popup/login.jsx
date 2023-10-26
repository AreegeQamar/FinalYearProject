import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

import {
  Text,
  Input,
  Button,
  Link,
  Flex,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  IconButton,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import {
  centeredpurple,
  inputFieldStyle,
  linkStyle,
  textStyle,
  dividerStyling,
  dividerTextStyling,
  body_Button2,
  body_Button3,
} from "../../Style/Style";
import { CloseIcon } from "@chakra-ui/icons";
import SignIn from "./Signup";
// import LoginButton from "./googlelogin";
// import LogoutButton from "./logout";


function Login() {

  const navigate = useNavigate();
  const data = { email: '', password: '' };
  const [loginData, setloginData] = useState(data);
  const [errorMessage , setErrorMessage] = useState(null);

  const [isModalSignupOpen, setIsModalSignupOpen] = useState(false);
  function handleloginChange(e){
    setloginData({...loginData, [e.target.name] : e.target.value});
  }
  const handleSignupClick = () => {
    setIsModalSignupOpen(true);
  };
  const handleCloseSignupModal = () => {
    setIsModalSignupOpen(false);
  };
  const handleLogin = async () => {
    
    if (loginData.email == null || loginData.email == '' ||  loginData.password == null || loginData.password == ''){
      setErrorMessage("Enter name , email , password");
    }
    else {
      
      console.log(loginData)
      await axios.post('http://localhost:3001' + "/login" , loginData , { 
        headers : {
          'Content-Type' : 'application/json'
  
        }
      })
      .then(response => {
        // console.log(response.status);
        // if status code  === 200
        //  navigate('/Mainhub');
        window.location.href = '/Mainhub'; 
      })
      .catch(error => {
        // else 401, 404, 500
        if (error.response.status === 404 ){
            console.log("noooooooooooooooooooooo")
        }
      });
    }
  };
  return (
    <form onSubmit={handleLogin}>
   
    <Flex flexDirection="column" style={{ textAlign: "center" }} gap="19px">
      <Text style={centeredpurple} mt="4">
        Log In
      </Text>
      <Flex mt="10px" flexDirection="column" gap="10px">
        <Input type="email" 
        placeholder="Email" 
        name = "email"
        required
        style={inputFieldStyle} 
        onChange={handleloginChange} value={loginData.email} />
        <Input
          type="password"
          name = "password"
          placeholder="Password"
          mt="10px"
          pattern="^(?=.*[A-Z])(?=.*\d).{8,}$"
          required
          style={inputFieldStyle}
          onChange={handleloginChange} value={loginData.password}
        />
        <Flex align="flex-start" justify="flex-start" mt="2">
          {/* <Link href="#" style={linkStyle}>
            Forgot Password?
          </Link> */}
        </Flex>
        <Button {...body_Button2} type="submit" mt="4">
          Login
        </Button>
      </Flex>
      <Flex align="center" justify="center" mt="4">
        <Text mr="3" style={textStyle}>
          Not a Questify.com member yet?
        </Text>
        <Link onClick={handleSignupClick} style={linkStyle}>
          Create an account
        </Link>
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
      <Flex align="center" p="4">
        <Divider flex="1" style={dividerStyling} />
        <Text mx="4" style={dividerTextStyling}>
          or
        </Text>
        <Divider flex="1" style={dividerStyling} />
      </Flex>
      <Flex align="center" justify="center">
        {/* <LogIn/> */}
        <Button {...body_Button3}>Sign In with Google</Button>
      </Flex>
    </Flex>
    </form>
  );
}

export default Login;