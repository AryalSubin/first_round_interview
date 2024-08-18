import React, { useEffect, useState } from "react";
import Modal from "../components/modal/modal";

const Page2 = () => {
  const [open, setOpen] = useState(false);
  const modelopenhandler = () => {
    setOpen(true);
  };
  const modelclosehandler = () => {
    setOpen(false);
  };

  useEffect(() => {
    const urlpath = window.location.pathname;
    if (urlpath == "/page1") {
      setOpen(true);
    }
    console.log(urlpath);
  }, []);
  return (
    <div>
      <h1 className="text-center font-medium text-xl">
        page2 without modal display at default but can be opened using button
      </h1>
      <Modal
        open={open}
        setOpen={setOpen}
        modelclosehandler={modelclosehandler}
        modelopenhandler={modelopenhandler}
      />
      <div className="flex flex-col h-full w-full justify-center items-center ">
        <h1 className="text-center  ">
          this is a page with modal compenent which checks the url and then if
          the url matches with '/page1' modal displays
        </h1>

        <div className="flex justify-center my-4">
          <button
            type="button"
            onClick={modelopenhandler}
            className=" py-2 px-8 bg-gray-400 text-white"
          >
            {" "}
            open model
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
