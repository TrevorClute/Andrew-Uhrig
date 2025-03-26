import { useState } from "react";

const PhotoDropDown = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="flex items-center justify-center text-center"
      onClick={() => {
        setIsActive((prev) => !prev);
      }}
    >
      &#9776; PHOTO LIBRARY
    </div>
  );
};

export default PhotoDropDown;
