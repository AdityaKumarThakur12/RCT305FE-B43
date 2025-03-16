import React from "react";
import { useNavigate } from "react-router-dom";
import { useFeedback } from "./feedbackData";

const FeedbackForm: React.FC = () => {
  const { feedback, setFeedback } = useFeedback();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.name || !feedback.email || !feedback.rating || !feedback.feedback) {
      alert("Please fill out all fields!");
      return;
    }
    navigate("/summary");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={feedback.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={feedback.email} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Rating:
          <select name="rating" value={feedback.rating} onChange={handleChange}>
            <option value="">Select Rating</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num.toString()}>
                {num}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Feedback:
          <textarea name="feedback" value={feedback.feedback} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
