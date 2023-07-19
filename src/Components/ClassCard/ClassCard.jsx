import React from "react";

function ClassCard({
  classObj,
  registeredClasses,
  handleRegister,
  handleCancelRegistration,
}) {

  return (
    <div
      key={classObj.id}
      className={`  ${
        !handleCancelRegistration && registeredClasses.includes(classObj.id)
          ? "bg-slate-200"
          : ""
      } card h-[228px] min-w-[250px] lg:w-[400px]    ring-1 rounded-2xl p-5 shadow-lg`}
    >
      <div className="sm:w-[358px] space-y-3">
        <div className="flex mx-3">
          <h1 className="text-[16px] text-[#800080] font-bold ">
            {classObj.name}
          </h1>
        </div>

        <div className="flex flex-wrap  text-[16px] font-normal  gap-3 mx-3 mr-4 overflow-y-auto h-20 scrollbar-style">
          {classObj.description}
        </div>
        <h1 className="text-[#800080] text-[14px] font-medium mx-3">
          No of Attendees{" "}
          <span className="text-[16px] text-black">({classObj.attendees})</span>
        </h1>

        {!handleCancelRegistration ? (
          !registeredClasses.includes(classObj.id) ? (
            <div className=" flex justify-center items-center">
              <button
                onClick={() => handleRegister(classObj.id)}
                className=" text-center text-white  rounded-full p-1 px-8 sm:text-[16px] font-medium bg-[#800080] sm:p- hover:brightness-90"
              >
                Register
              </button>
            </div>
          ) : (
            <div className=" flex justify-center items-center   ">
              <h1 className="text-center bg-[#800080]  text-white  rounded-full p-1 px-3 sm:text-[16px] font-medium">
                Already registerd
              </h1>
            </div>
          )
        ) : (
          <div className=" flex justify-center items-center">
            <button
              onClick={() => handleCancelRegistration(classObj.id)}
              className=" text-center text-white  rounded-full p-1 px-8 sm:text-[16px] font-medium bg-[#800080] sm:p- hover:brightness-90"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassCard;
