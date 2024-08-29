import React, { useState } from 'react';
import { BsCardImage } from "react-icons/bs";

const ImgUpload = () => {
  const [videoFile, setVideoFile] = useState(null);

  const handleImgChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(URL.createObjectURL(file));
  };

  const handleButtonClick = () => {
    document.getElementById('img-upload').click();
  };

  return (
    <div className="add">
      <form>
        <input
          type="file"
          id="img-upload"
          name="video-upload"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImgChange}
        />
        <button type="button" onClick={handleButtonClick}>
          <i><BsCardImage /></i> {/* Usa un ícono de Font Awesome */}
        </button>
      </form>
      {videoFile && (
        <div>
          <h3>Vista previa del video:</h3>
          <video width="400" controls>
            <source src={videoFile} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      )}
    </div>
  );
};

export default ImgUpload;
