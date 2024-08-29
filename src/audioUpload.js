import React, { useState } from 'react';
import { BsFillMicFill } from "react-icons/bs";

const AudioUpload = () => {
  const [AudioFile, setVideoFile] = useState(null);

  const handleAudioChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(URL.createObjectURL(file));
  };

  const handleButtonClick = () => {
    document.getElementById('audio-upload').click();
  };

  return (
    <div className="add">
      <form>
        <input
          type="file"
          id="audio-upload"
          name="video-upload"
          accept="audio/*"
          style={{ display: 'none' }}
          onChange={handleAudioChange}
        />
        <button type="button" onClick={handleButtonClick}>
          <i><BsFillMicFill /></i> {/* Usa un ícono de Font Awesome */}
        </button>
      </form>
      {AudioFile && (
        <div>
          <h3>Vista previa del video:</h3>
          <video width="400" controls>
            <source src={AudioFile} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      )}
    </div>
  );
};

export default AudioUpload;
