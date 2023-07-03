import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ImageLog = () => {
  const [uuid, setUuid] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Generate UUID for the images
    const imageUuid = uuidv4();

    // Upload images to Cloudinary
    const uploadPromises = images.map(async (image) => {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'gdsbackend'); // Replace with your Cloudinary upload preset name

      const cloudinaryResponse = await fetch(
        'https://api.cloudinary.com/v1_1/djw9uakpw/image/upload', // Replace with your Cloudinary cloud name
        {
          method: 'POST',
          body: formData,
        }
      );

      const cloudinaryData = await cloudinaryResponse.json();
      return cloudinaryData.secure_url;
    });

    const uploadedImages = await Promise.all(uploadPromises);

    // Submit data to the database
    const formDataDB = new FormData();
    formDataDB.append('uuid', imageUuid);
    formDataDB.append('description', description);
    formDataDB.append('images', uploadedImages.join(',')); // Convert array to string with comma delimiter

    await fetch('http://localhost:8000/uploads/', {
      method: 'POST',
      body: formDataDB,
    }); // Replace with your backend API URL

    // Reset form fields
    setUuid('');
    setDescription('');
    setImages([]);
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        UUID:
        <input
          type="text"
          value={uuid}
          onChange={(e) => setUuid(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Images:
        <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ImageLog;