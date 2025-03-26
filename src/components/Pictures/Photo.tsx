import { useState } from "react";
import Photo_1 from "../../assets/Photo_1.jpg";
import Photo_2 from "../../assets/Photo_2.jpg";
import Photo_3 from "../../assets/Photo_3.jpg";
const Picture = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Photo_1, Photo_2, Photo_3] //all photos that can be rotated through

  //function handles when the user clicks on the left arrow
  const handleLeftClick = () => {
    setCurrentImage((prev)=>{
        if(prev === images.length - 1){
            return 0
        }
        return prev + 1
    }); //updates image
  };

  //function handles when the user clicks on the right arrow
  const handleRightClick = () => {
    setCurrentImage((prev)=>{
        if(prev === images.length - 1){
            return 0
        }
        return prev + 1
    }); //updates image
  };

  return (
    <>
      {/* Left Arrow */}
      <div
        onClick={handleLeftClick}
        className="absolute left-[35rem] top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-lg px-4 py-2 flex items-center justify-center opacity-75 cursor-pointer"
      >
        <p className="text-2xl font-bold text-black opacity-90">&larr;</p>
      </div>

      {/* Image */}
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <img
          src={images[currentImage]}
          alt="Current"
          className="rounded-lg shadow-lg max-w-1/2 h-auto ml-80"
        />
      </div>

      {/* Right Arrow */}
      <div
        onClick={handleRightClick}
        className="absolute right-[15rem] top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-lg px-4 py-2 flex items-center justify-center opacity-75 cursor-pointer"
      >
        <p className="text-2xl font-bold text-black">&rarr;</p>
      </div>
    </>
  );
};

export default Picture;