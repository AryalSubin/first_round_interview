import React, { useState } from "react";

const Modal = ({ open, setOpen, modelclosehandler }) => {
  //   const [open, setOpen] = useState(false);
  //   const modelopenhandler = () => {
  //     // alert("model is opened");
  //     setOpen(true);
  //   };
  //   const modelclosehandler = () => {
  //     // alert("model is opened");

  //     setOpen(false);
  //   };

  return (
    <>
      {/* modal  */}

      <div
        className={`absolute top-0 h-full transition-all duration-500 w-full left-0 bg-black/50 ${
          open
            ? "opacity-100 pointer-events-auto  "
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative size-full ">
          <div
            onClick={modelclosehandler}
            className="h-full absolute top-0 left-0 w-full bg-black/30"
          />
          <div className="h-[30vh] w-[40vh] flex flex-col justify-between p-2 bg-gray-100 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <h2 className=" text-3xl font-semibold ">This is a modal </h2>
            <button
              onClick={modelclosehandler}
              type="button"
              className="border bg-gray-300 px-2 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
