import { useState } from "react";
import Photo_1 from "../../assets/Photo_1.jpg";
import Photo_2 from "../../assets/Photo_2.jpg";
import Photo_3 from "../../assets/Photo_3.jpg";
import Photo_4 from "../../assets/Photo_4.png";
import Photo_5 from "../../assets/Photo_5.png";
import Photo_6 from "../../assets/Photo_6.png";
import Photo_7 from "../../assets/Photo_7.png";
import Photo_8 from "../../assets/Photo_8.png";
import Photo_9 from "../../assets/Photo_9.png";
const Picture = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Photo_1, Photo_2, Photo_3, Photo_4, Photo_5, Photo_6, Photo_7, Photo_8, Photo_9];
  const length = images.length;
  const current_number = currentImage + 1;

  const handleLeftClick = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : prev)); // Prevent going below 0
  };

  const handleRightClick = () => {
    setCurrentImage((prev) => (prev < length - 1 ? prev + 1 : prev)); // Prevent exceeding max index
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative max-w-[50%] ml-100">
        {/* Left Arrow */}
        {currentImage > 0 && (
          <div
            onClick={handleLeftClick}
            className="absolute left-0 top-[45%] transform -translate-y-1/2 bg-gray-300 rounded-lg px-4 py-2 flex items-center justify-center opacity-75 cursor-pointer"
          >
            <p className="text-2xl font-bold text-black opacity-90">&larr;</p>
          </div>
        )}

        {/* Image */}
        <img
          src={images[currentImage]}
          alt="Current"
          className="rounded-lg shadow-lg w-full h-auto"
        />

        {/* Right Arrow */}
        {currentImage < length - 1 && (
          <div
            onClick={handleRightClick}
            className="absolute right-0 top-[45%] transform -translate-y-1/2 bg-gray-300 rounded-lg px-4 py-2 flex items-center justify-center opacity-75 cursor-pointer"
          >
            <p className="text-2xl font-bold text-black">&rarr;</p>
          </div>
        )}

        {/* Counter */}
        <div className="text-center mt-4">
          <p className="text-2xl font-bold text-black">
            Photo {current_number} of {length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Picture;