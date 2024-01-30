import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateText, updateImageUrl } from "../reducer/reducer";

const EditableComponent = () => {
  const dispatch = useDispatch();
  const { text, imageUrl } = useSelector((state) => state.editable);
  const [newText, setNewText] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");

  const handleTextChange = () => {
    dispatch(updateText(newText || "Default Text"));
    setNewText("");
  };

  const handleImageUrlChange = () => {
    dispatch(updateImageUrl(newImageUrl || "images/footSantaCasa.png"));
    setNewImageUrl("");
  };

  return (
    <div>
      <div>
        <img src={imageUrl} alt="Image" style={{ maxWidth: "100%" }} />
        <input
          type="text"
          placeholder="New Image URL"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
        />
        <button onClick={handleImageUrlChange}>Change Image</button>
      </div>
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
    </div>
  );
};

export default EditableComponent;
