// src/CommentBox.js
import React, { useState } from 'react';
import axios from 'axios';
import './styles.scss';
import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';
import Dropdown from './dropdown';
import ImgUpload from './imgUpload';
import VideoUpload from './videoUpload';
import AudioUpload from './audioUpload';
import AddTag from './tag_artirts';

function App() {
  const handlePost = async () => {
    await axios.post('/comments', { text: comment });
    setComment('');
  };

  const [comment, setComment] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleEmojiClick = (emojiObject) => {
    setComment(comment + emojiObject.emoji);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div id="comment-box" className={`comment-box grid grid-cols-10 grid-rows-3 gap-3 ${isFocused ? 'focused' : ''}`}>
      <div id="photo" className='photo row-span-1'>
        <img src="./perfil.png" alt="hola" />
      </div>
      <div id="post" className={`post col-span-9 row-span-2 ${isFocused ? 'active' : ''}`}>
        <div className="comment-container">
          <div className="textarea-wrapper">
            <textarea
              id="comment-input"
              className={`comment-input ${isFocused ? 'focused' : ''}`}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              onFocus={handleFocus}
            />
            {isFocused && (
              <button id="emoji-button" className="emoji-button" onClick={() => setShowPicker(!showPicker)}>
                <BsEmojiSmile />
              </button>
            )}
          </div>
          {showPicker && (<EmojiPicker onEmojiClick={handleEmojiClick} />)}
        </div>
      </div>
      {isFocused && (
        <>
          <div id="comment-actions" className="comment-actions col-span-4 col-start-2 row-start-3">
            Agrega
            <ImgUpload />
            <VideoUpload />
            <AudioUpload />
            <AddTag />
          </div>
          <div id="comment-post" className="comment-post col-span-4 col-start-7 row-start-3">
            <Dropdown />
            <button id="post-button" className="post-button" onClick={handlePost}>Post</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;



