import axios from "axios";
import React, { useState } from "react";
// import {localhost} from '';
import { useNavigate } from 'react-router-dom';
import {
  Text,
  Input,
  Button,
  Link,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  IconButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import {
  body_Button2,
  centeredpurple,
  inputFieldStyle,
  textStyle,
  linkStyle,
} from "../../Style/Style";
import { CloseIcon } from "@chakra-ui/icons";
import Login from "./login";


function SignIn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleLoginClick = () => {
    setIsModalOpen(true);
  };
  const navigate = useNavigate();
  // const [name , setUserName] = useState(null);
  // const [email , setEmail] = useState(null);
  // const [password , setPassword] = useState(null);
  const task = { name: '', email: '', password: '' };
  const [signUpData, setSignUpData] = useState(task);
  const [errorMessage , setErrorMessage] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  function handleNameChange(e){
    setSignUpData({...signUpData, [e.target.name] : e.target.value});
  }
  // const handleRegister = async() => {
  // if (signUpData.email == null || signUpData.email == '' || signUpData.name == null || signUpData.name == '' || signUpData.password == null || signUpData.password == ''){
  //   setErrorMessage("Enter name , email , password");
  // }
  // Inside your handleRegister function
  const handleRegister = async () => {
  if (
    !signUpData.name ||
    !signUpData.email ||
    !signUpData.password ||
    !isValidEmail(signUpData.email) ||
    !isValidPassword(signUpData.password)
  ) {
    setErrorMessage("Please fill in all fields with valid data.");
  } else {
    console.log(signUpData)
    await axios.post('http://localhost:3001' + "/signup" , signUpData , { 
      headers : {
        'Content-Type' : 'application/json'

      }
    })
    .then(response => {
      navigate.push("/signup")
    })
    .catch(error => {

    });
  }
};

// Helper functions for validation
const isValidEmail = (email) => {
  // Basic email format validation
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return emailPattern.test(email);
};

const isValidPassword = (password) => {
  // Password validation, should include at least one uppercase letter and one digit, and be at least 8 characters long
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordPattern.test(password);
};


  // else {
    
    // console.log(signUpData)
    // await axios.post('http://localhost:3001' + "/signup" , signUpData , { 
    //   headers : {
    //     'Content-Type' : 'application/json'

    //   }
    // })
    // .then(response => {
    //   navigate.push("/signup")
    // })
    // .catch(error => {

    // });
  // }
    

  return (
    <form onSubmit={handleRegister}>
    <Flex
      flexDirection="column"
      style={{ textAlign: "center" }}
      gap="19px"
      px="20px"
    >
      <Text style={centeredpurple} mt="4">
        Create Account
      </Text>
    
      <Flex mt="10px" flexDirection="column" gap="15px">
        <Input type="text" placeholder="Name" name="name" style={inputFieldStyle} onChange={handleNameChange} value={signUpData.name} required />
        <Input type="email" placeholder="Email"  name="email" style={inputFieldStyle} onChange={handleNameChange} value={signUpData.email}  required />
        <Input type="password" placeholder="Password" name = "password" pattern="^(?=.*[A-Z])(?=.*\d).{8,}$" style={inputFieldStyle} onChange={handleNameChange} value={signUpData.password} required/>
        
        <Button {...body_Button2}  type="submit" mt="4">
          Create Account
        </Button>
      </Flex>
      <Flex align="center" justify="center" mt="4">
        <Text mr="3" style={textStyle}>
          Already a member?
        </Text>
        <Link style={linkStyle} onClick={handleLoginClick}>
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
      </Flex>
    </Flex>
    </form>
  );
}

export default SignIn;