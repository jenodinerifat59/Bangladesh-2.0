import React from "react";

const Question = ({ question, value, onChange }) => {
  return (
    <div className="flex justify-between items-center border p-4 ">
      <p className="w-2/3">{question}</p>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border px-4 py-2 rounded bg-green-100"
      >
        <option value="">Select</option>
        <option value="yes">Yes, I Agree</option>
        <option value="no">No, I Disagree</option>
        <option value="neutral">Neutral</option>
      </select>
    </div>
  );
};

export default Question;