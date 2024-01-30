import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateText } from "../reducer/reducer";

const TextComponent = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.editable);
  const [newText, setNewText] = useState("");

  const handleTextChange = () => {
    dispatch(updateText(newText || "Default Text"));
    setNewText("");
  };

  return (
    <div>
      <p>{text}</p>
      <input
        type="text"
        placeholder="New Text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={handleTextChange}>Change Text</button>
    </div>
  );
};

export default TextComponent;
