import { useRef, useState } from "react";

const NavBar = () => {
  const [isLibraryActive, setIsLibraryActive] = useState(false);

  const onLibraryClick = () => {
    setIsLibraryActive((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed flex h-[7vh] min-h-50px] w-[100vw] bottom-0 sm:top-0">
        <div
          className="flex-1 bg-[#000000] text-[white] rounded flex items-center justify-center
          sm:m-[4px] perspective-[3000px]
          m-[4px] mb-[8px] "
        >
          <div
            onClick={onLibraryClick}
            className={"flex-2 h-[100%] flex justify-center items-center cursor-pointer bg-[#000000]"}
          >
            PHOTO LIBRARY &nbsp;
            <span
              className={`transform transition-transform duration-300 bg-[#000000] ${isLibraryActive ? "sm:scale-y-[1] scale-y-[-1]" : "sm:scale-y-[-1] scale-y-[1]"} `}
            >
              &uarr;
            </span>
          </div>
          <div className={"flex-2 h-[100%] flex justify-center items-center font-black bg-[#000000]"}>Andrew Uhrig</div>
          <div className={"flex-1 h-[100%] flex justify-center items-center bg-[#000000] cursor-pointer "}>CONTACT</div>
          <div className={"flex-1 h-[100%] flex justify-center items-center  bg-[#000000] cursor-pointer "}>ABOUT</div>
        </div>
      </nav>

      {isLibraryActive && <div className={"bg-blue-700 w-[40vw] h-[50vh] absolute sm:top-[7vh] bottom-[7vh] ml-[4px]"}></div>}
    </>
  );
};

export default NavBar;
