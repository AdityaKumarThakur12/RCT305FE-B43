import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz, submitAnswer, skipQuestion } from "./redux/reducer2";
import { Box, Button, Text, VStack, RadioGroup, Radio } from "@chakra-ui/react";

const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, loading, score } = useSelector((state) => state.quiz);
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  const handleSubmit = () => {
    if (selectedOption) {
      dispatch(submitAnswer(questions[index]?.id, selectedOption));
      setSelectedOption(""); 
      setIndex(index + 1);
    }
  };

  const handleSkip = () => {
    dispatch(skipQuestion(questions[index]?.id));
    setSelectedOption("");
    setIndex(index + 1);
  };

  if (loading) return <Text>Loading...</Text>;
  if (index >= questions.length) return <Text>Final Score: {score}</Text>;

  return (
    <Box p={4} borderWidth={1} borderRadius="lg">
      <Text fontSize="xl" mb={4}>{questions[index]?.question}</Text>

      <RadioGroup onChange={setSelectedOption} value={selectedOption}>
        <VStack align="start">
          {questions[index]?.options.map((option, i) => (
            <Radio key={i} value={option}>{option}</Radio>
          ))}
        </VStack>
      </RadioGroup>

      <Button colorScheme="green" mt={4} onClick={handleSubmit} isDisabled={!selectedOption}>
        Submit
      </Button>
      <Button colorScheme="red" ml={2} mt={4} onClick={handleSkip}>
        Skip
      </Button>
    </Box>
  );
};

export default Quiz;
