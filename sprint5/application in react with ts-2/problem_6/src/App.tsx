import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  rating: string;
  feedback: string;
};

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  
    if (!formData.name || !formData.email || !formData.rating || !formData.feedback) {
      alert("Please fill out all fields before submitting!");
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", rating: "", feedback: "" }); 
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Rating:
              <select name="rating" value={formData.rating} onChange={handleChange}>
                <option value="">Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Feedback:
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>Thank you for your feedback!</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Rating: {formData.rating}</p>
          <p>Feedback: {formData.feedback}</p>
        </div>
      )}
    </div>
  );
};

export default App;
