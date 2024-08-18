import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center gap-4 flex-col">
      <h1>this is home page</h1>
      <div>click to goto another page with modal</div>
      <Link to="/page1" className="">
        <div className="px-2 py-1 bg-gray-400 text-white w-fit">
          navigate to page 1
        </div>
      </Link>
      <Link to="/page2" className="">
        <div className="px-2 py-1 bg-gray-400 text-white w-fit">
          navigate to page 2
        </div>
      </Link>

      <h1 className="text-xl w-[70vw]">
        Task 5: You are given an integer array nums and you have to return a new
        counts array where counts[i] is the number of smaller elements to the
        right of nums[i].
      </h1>
    </div>
  );
};

export default Home;
