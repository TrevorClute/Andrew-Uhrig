import React from 'react';
import photo from './Andrew_website.png';
import './photo.css'; // Import CSS file correctly

const Photo: React.FC = () => {
  return (
    <div className="photo-container"> {/* Use CSS class here */}
      <img src={photo} alt="Description of the image" />
    </div>
  );
};

export default Photo;


