import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFeedback } from "../redux/feedbackSlice";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";

const FeedbackForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    feedback: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.rating || !formData.feedback) {
      alert("Please fill out all fields!");
      return;
    }
    dispatch(
      addFeedback({ ...formData, id: Date.now(), date: new Date().toISOString() })
    );
    navigate("/dashboard");
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" onChange={handleChange} value={formData.name} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" onChange={handleChange} value={formData.email} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Rating</FormLabel>
          <Select name="rating" onChange={handleChange} value={formData.rating}>
            <option value={0}>Select Rating</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Feedback</FormLabel>
          <Textarea name="feedback" onChange={handleChange} value={formData.feedback} />
        </FormControl>
        <Button mt={4} type="submit" colorScheme="teal">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FeedbackForm;
