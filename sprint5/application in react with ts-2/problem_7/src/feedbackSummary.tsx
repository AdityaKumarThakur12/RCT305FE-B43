import React from "react";
import { useNavigate } from "react-router-dom";
import { useFeedback } from "./feedbackData";

const FeedbackSummary: React.FC = () => {
  const { feedback } = useFeedback();
  const navigate = useNavigate();

  const handleEdit = () => navigate("/");

  return (
    <div>
      <h2>Feedback Summary</h2>
      <p><strong>Name:</strong> {feedback.name}</p>
      <p><strong>Email:</strong> {feedback.email}</p>
      <p><strong>Rating:</strong> {feedback.rating}</p>
      <p><strong>Feedback:</strong> {feedback.feedback}</p>
      <button onClick={handleEdit}>Edit Feedback</button>
    </div>
  );
};

export default FeedbackSummary;
