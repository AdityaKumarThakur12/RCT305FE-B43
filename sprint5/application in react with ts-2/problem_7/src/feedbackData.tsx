import React, { createContext, useState, useContext } from "react";

type FeedbackData = {
  name: string;
  email: string;
  rating: string;
  feedback: string;
};

type FeedbackContextType = {
  feedback: FeedbackData;
  setFeedback: React.Dispatch<React.SetStateAction<FeedbackData>>;
};

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) throw new Error("useFeedback must be used within FeedbackProvider");
  return context;
};

type FeedbackProviderProps = {
  children: React.ReactNode;
};

const FeedbackProvider: React.FC<FeedbackProviderProps> = ({ children }) => {
  const [feedback, setFeedback] = useState<FeedbackData>({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackProvider;
