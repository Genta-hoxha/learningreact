import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateImageUrl } from "../reducer/reducer";

const ImageComponent = () => {
  const dispatch = useDispatch();
  const { imageUrl } = useSelector((state) => state.editable);
  const [newImageUrl, setNewImageUrl] = useState("");

  const handleImageUrlChange = () => {
    dispatch(updateImageUrl(newImageUrl || "18.png"));
    setNewImageUrl("");
  };

  return (
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
  );
};

export default ImageComponent;
