import React, { useState, useEffect } from "react";
import {message} from 'antd'
import "./MainPage.css";
import { useClassContext } from "../Context/ClassContext";
import ClassCard from "../Components/ClassCard/ClassCard";

function MainPage() {
  const { classes, dispatch, registeredClasses, setRegisteredClasses } =
    useClassContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleClasses, setVisibleClasses] = useState(6);
  const [isMaxRegistrations, setIsMaxRegistrations] = useState(false);

  useEffect(() => {
    setIsMaxRegistrations(registeredClasses.length >= 3);
  }, [registeredClasses]);

  const handleRegister = (id) => {
    if (registeredClasses.length < 3 && !registeredClasses.includes(id)) {
      dispatch({ type: "REGISTER_CLASS", payload: { id } });
      setRegisteredClasses([...registeredClasses, id]);
    } else {
      message.warning("You have reached your maximum number of class registrations!")

    }
  };

  const filteredClasses = classes.filter((cls) =>
    cls.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleFilteredClasses = filteredClasses.slice(0, visibleClasses);
  const remainingClassesCount =
    filteredClasses.length - visibleFilteredClasses.length;

  const handleLoadMore = () => {
    setVisibleClasses((prevVisible) => prevVisible + 6);
  };
  return (
    <div className="mb-10">
      {isMaxRegistrations ? (
        <div className="flex justify-center items-center mt-10 sm:mt-40 p-4 font-semibold text-[#800080] text-xl ">
          <p>You have reached your maximum number of class registrations!</p>
        </div>
      ) : (
        <div>
          <div className="flex justify-center mt-4 ">
            <input
              type="text"
              className=" border  p-1 px-2 sm:w-96 text-[#800080]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search classes"
              style={{
                borderImage:
                  "linear-gradient(270deg, #800080 0%, #FF864C 100%) 1",
                borderImageSlice: 1,
              }}
            />
          </div>

          <div className="carousel grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-11 sm:px-16 items-center justify-start  scrollbar-hide gap-6 space-y-5 sm:space-y-0 rounded-xl mr-[5px] ">
            {visibleFilteredClasses.map((classObj) => (
              <ClassCard
                classObj={classObj}
                registeredClasses={registeredClasses}
                handleRegister={handleRegister}
              />
            ))}
            {remainingClassesCount > 0 && (
              <div className="flex justify-start items-center  ">
                <button
                  onClick={handleLoadMore}
                  className="moreButton border-2 px-10 py-1 rounded-full shadow-sm text-[#800080] font-semibold shadow-slate-700"
                >
                  Load More ({remainingClassesCount} left)
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
