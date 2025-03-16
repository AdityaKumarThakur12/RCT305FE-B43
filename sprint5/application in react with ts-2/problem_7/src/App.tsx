import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackProvider from "./feedbackData";
import FeedbackForm from "./feedbackForm";
import FeedbackSummary from "./feedbackSummary";

const App: React.FC = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path="/summary" element={<FeedbackSummary />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
