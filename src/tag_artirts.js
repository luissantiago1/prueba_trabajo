import React from 'react';
import { BsFillTagFill } from "react-icons/bs";

const AddTag = () => {

  const handleButtonClick = () => {
    document.getElementById('AddTag').click();
  };

  return (
    <div className="add">
      <form>
        <input
          type="file"
          id="AddTag"
          name="video-upload"
          accept="audio/*"
          style={{ display: 'none' }}
                  />
        <button type="button" onClick={handleButtonClick}>
          <i><BsFillTagFill /></i> {/* Usa un ícono de Font Awesome */}
        </button>
      </form>
    </div>
  );
};

export default AddTag;