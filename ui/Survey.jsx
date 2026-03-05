import React, { useState } from "react";
import Question from "../component/Question";

const questions = [
  "Do you believe Bangladesh is on the right path toward becoming a developed nation?",
  "Do you support current economic policies?",
  "Are you satisfied with education development?"
];

const Survey = () => {
  const [answers, setAnswers] = useState({});

  const handleChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  return (
    <div className="max-w-full mx-auto">
      <h2 className="text-xl font-bold mb-4">Survey Questions</h2>

      {questions.map((q, index) => (
        <Question
          key={index}
          question={q}
          value={answers[index] || ""}
          onChange={(value) => handleChange(index, value)}
        />
      ))}
    </div>
  );
};

export default Survey;
