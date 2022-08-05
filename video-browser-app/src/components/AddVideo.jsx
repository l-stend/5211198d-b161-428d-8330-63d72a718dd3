import React, { useState } from 'react';
import { uploadBytes, ref } from 'firebase/storage';
import { storage } from '../firebase-config';
import uniqid from 'uniqid';

const AddVideo = () => {
  const [videoContent, setVideoContent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e);
    const videoId = uniqid();

    const metadata = {
      customMetadata: {
        id: videoId,
        title: e.target.title.value,
        category: e.target.category.value,
      },
    };

    const videoRef = ref(storage, `videos/${videoId}`);
    uploadBytes(videoRef, videoContent, metadata);
  };

  return (
    <div>
      <h2>add video</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>title</label>
        <input type='text' name='title' />
        <label htmlFor=''>video</label>
        <input
          type='file'
          name='video'
          onChange={(e) => setVideoContent(e.target.files[0])}
        />
        <label htmlFor=''>category</label>
        <input type='text' name='category' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddVideo;
