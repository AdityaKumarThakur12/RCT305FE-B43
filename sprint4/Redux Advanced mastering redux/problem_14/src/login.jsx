import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/reducer1";
import { Input, Button, Box, Text } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector((state) => state.auth);

  const handleSubmit = () => {
    dispatch(login(email, password));
  };

  return (
    <Box p={6} borderWidth={1} borderRadius="lg" w="300px">
      <Text fontSize="xl">Login</Text>
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} my={2} />
      <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} my={2} />
      <Button colorScheme="blue" onClick={handleSubmit} isLoading={loading}>Login</Button>
      {error && <Text color="red.500">{error}</Text>}
      {isAuthenticated && <Text color="green.500">Logged in successfully!</Text>}
    </Box>
  );
};

export default Login;
