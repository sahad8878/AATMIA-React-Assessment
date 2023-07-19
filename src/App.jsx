import React, { useState} from "react";

import Header from "./Components/Header/Header";
import MainPage from "./Pages/MainPage";
import RegisterdPage from "./Pages/RegisterdPage";
import { ClassProvider } from "./Context/ClassContext";

const App = () => {
  const [tab, setTab] = useState("selectClass");

  return (
    <ClassProvider>
      <div>
        <Header />

        <div className=" flex flex-col sm:flex-row justify-center items-center mt-7 px-5">
          <div
            onClick={(e) => setTab(e.target.id)}
            id="selectClass"
            className={`${
              tab === "selectClass"
                ? "bg-gradient-to-r  from-[#FF864C] to-[#800080] text-white hover:shadow-lg "
                : "hover:shadow-lg border hover:bg-[#800080] hover:text-white"
            } flex justify-center items-center rounded-full w-72 sm:w-96 p-1 font-semibold cursor-pointer`}
          >
            Select classes
          </div>
          <div
            onClick={(e) => setTab(e.target.id)}
            id="registeredClass"
            className={`${
              tab === "registeredClass"
                ? "bg-gradient-to-r  from-[#FF864C] to-[#800080] hover:shadow-lg text-white  hover:bg-opacity-70"
                : " hover:shadow-lg border hover:text-white  hover:bg-[#800080]"
            } rounded-full w-72 sm:w-96 p-1 flex justify-center items-center font-semibold cursor-pointer`}
          >
            Classes I have Registered
          </div>
        </div>

        {tab === "registeredClass" ? <RegisterdPage /> : <MainPage />}
      </div>
    </ClassProvider>
  );
};

export default App;
