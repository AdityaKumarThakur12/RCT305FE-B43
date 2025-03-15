import React from "react";
import { Feedback } from "./types";

interface FeedbackViewerProps {
  feedbackList: Feedback[];
}

const FeedbackViewer: React.FC<FeedbackViewerProps> = ({ feedbackList }) => {
  return (
    <div>
      <h2>Feedback Submissions</h2>
      {feedbackList.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <ul>
          {feedbackList.map((feedback) => (
            <li key={feedback.id}>
              <p><strong>Name:</strong> {feedback.name}</p>
              <p><strong>Email:</strong> {feedback.email}</p>
              <p><strong>Phone:</strong> {feedback.phone}</p>
              <p><strong>Rating:</strong> {feedback.rating}</p>
              <p><strong>Comments:</strong> {feedback.comments}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackViewer;
