import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {

  const handleClick = () => {
    alert("Welcome to Navatara Technologies");
  }

  return (
    // <div className="flex flex-col items-center justify-center gap-y-2 pt-3">
    //   <h1 className="text-4xl font-bold text text-blue-600">
    //     Tailwind v4 is working! 🎉
    //   </h1>
    //   <p className="text-2xl text-blue-400 font-medium">
    //     This is just a Practice Task and shall be commented later !
    //   </p>
    //   <button className="flex items-center justify-center px-[0.5em] py-[0.5em] text-xl rounded-xl bg-blue-300  hover:bg-blue-500 transition cursor-pointer">
    //     Hello
    //   </button>
    // </div>
    

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 text-center space-y-4">
        <h1 className="text-4xl text-blue-500 font-bold">
          Navatara
        </h1>

        <h3 className="text-xl text-blue-400 font-medium">
          navatara.technology@gmail.com
        </h3>

        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Click Me
        </button>
      </div>

    </div>
  );
}

export default App;
