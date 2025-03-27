import React, { useState } from "react";
import Photo_1 from "../../assets/Photo_1.jpg";
import Photo_2 from "../../assets/Photo_2.jpg";
import Photo_3 from "../../assets/Photo_3.jpg";

const Picture = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Photo_1, Photo_2, Photo_3];
  const length = images.length; // Total number of photos

  const handleLeftClick = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : prev)); // Prevent going below 0
  };

  const handleRightClick = () => {
    setCurrentImage((prev) => (prev < length - 1 ? prev + 1 : prev)); // Prevent exceeding max index
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Container for the image and arrows */}
      <div className="relative max-w-[50%] ml-100">
        {/* Left Arrow */}
        <div
          onClick={handleLeftClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-lg px-4 py-2 flex items-center justify-center opacity-75 cursor-pointer"
        >
          <p className="text-2xl font-bold text-black opacity-90">&larr;</p>
        </div>

        {/* Image */}
        <img
          src={images[currentImage]}
          alt="Current"
          className="rounded-lg shadow-lg w-full h-auto"
        />

        {/* Right Arrow */}
        <div
          onClick={handleRightClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-lg px-4 py-2 flex items-center justify-center opacity-75 cursor-pointer"
        >
          <p className="text-2xl font-bold text-black">&rarr;</p>
        </div>
      </div>
    </div>
  );
};

export default Picture;