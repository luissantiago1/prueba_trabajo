import React, { useState } from 'react';
import { BsFillPlayCircleFill } from "react-icons/bs";

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(URL.createObjectURL(file));
  };

  const handleButtonClick = () => {
    document.getElementById('video-upload').click();
  };

  return (
    <div className="add">
      <form>
        <input
          type="file"
          id="video-upload"
          name="video-upload"
          accept="video/*"
          style={{ display: 'none' }}
          onChange={handleVideoChange}
        />
        <button type="button" onClick={handleButtonClick}>
          <i><BsFillPlayCircleFill /></i> {/* Usa un ícono de Font Awesome */}
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

export default VideoUpload;
