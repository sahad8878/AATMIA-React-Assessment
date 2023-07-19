import React from "react";
import { useClassContext } from "../Context/ClassContext";
import ClassCard from "../Components/ClassCard/ClassCard";

function RegisterdPage() {
  const { classes, registeredClasses, setRegisteredClasses, dispatch } = useClassContext();

  const handleCancelRegistration = (id) => {
    setRegisteredClasses(registeredClasses.filter((clsId) => clsId !== id));
    dispatch({ type: 'CANCEL_REGISTRATION', payload: { id } });
  };

  const registeredClassesData = classes.filter((cls) => registeredClasses.includes(cls.id));

  return (
    <div>
      <div className="">
        {registeredClassesData.length > 0 ? (
          <div className="carouse grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  p-11 px-16 items-center justify-start  scrollbar-hide gap-6 space-y-5 sm:space-y-0 rounded-xl mr-[5px] ">
            {registeredClassesData.map((classObj) => (
         

              <ClassCard classObj={classObj} handleCancelRegistration={handleCancelRegistration} />
            ))}
          </div>
        ) : (
          <div className=" flex justify-center items-center mt-10 sm:mt-40 p-4 font-semibold text-[#800080] text-xl">You have not registered for any classes yet.</div>
        )}
      </div>
    </div>
  );
}

export default RegisterdPage;
