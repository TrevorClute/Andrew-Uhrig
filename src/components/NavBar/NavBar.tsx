import PhotoDropDown from "../PhotoDropDown/PhotoDropDown";

const NavBar = () => {
  const item = "flex-1 h-[100%] flex justify-center items-center";
  return (
    <>
      <div className="fixed flex h-[7vh] min-h-[50px] w-[100vw] bottom-0 sm:top-0">
        <div
          className="flex-1 bg-[#000000] text-[white] rounded flex items-center justify-center
          sm:m-[4px] 
          m-[4px] mb-[8px]"
        >
          <div className={item}>help</div>
          <div className={item}></div>
          <PhotoDropDown />
          <div className={item}>CONTACT</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
