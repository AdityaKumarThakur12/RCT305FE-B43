import React, { useState } from "react";
import FeedbackForm from "./feedbackForm";
import FeedbackViewer from "./feedbackViewr";
import { Feedback, Filter } from "./types";

const App: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
  const [filter, setFilter] = useState<Filter>("All");

  const addFeedback = (feedback: Feedback) => {
    setFeedbackList([...feedbackList, { ...feedback, id: feedbackList.length + 1 }]);
  };

  const filteredFeedback = feedbackList.filter((feedback) => {
    if (filter === "All") return true;
    if (filter === "Positive") return feedback.rating >= 4;
    return feedback.rating < 4;
  });

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>Aromatic Bar Feedback System</h1>
      <FeedbackForm onSubmit={addFeedback} />
      <div style={{ margin: "20px 0" }}>
        <label>Filter Feedback:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value as Filter)}>
          <option value="All">All</option>
          <option value="Positive">Positive</option>
          <option value="Negative">Negative</option>
        </select>
      </div>
      <FeedbackViewer feedbackList={filteredFeedback} />
    </div>
  );
};

export default App;
