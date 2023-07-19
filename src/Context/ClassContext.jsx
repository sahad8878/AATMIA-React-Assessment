import React, { createContext, useReducer, useContext, useState } from 'react';
import classData from '../classData';

const ClassContext = createContext();

const classReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_CLASS':
      return state.map((cls) =>
        cls.id === action.payload.id ? { ...cls, attendees: cls.attendees + 1 } : cls
      );
    case 'CANCEL_REGISTRATION':
      return state.map((cls) =>
        cls.id === action.payload.id ? { ...cls, attendees: cls.attendees - 1 } : cls
      );
    default:
      return state;
  }
};

export const ClassProvider = ({ children }) => {
  const [classes, dispatch] = useReducer(classReducer, classData);
  const [registeredClasses, setRegisteredClasses] = useState([]);

  return (
    <ClassContext.Provider
      value={{ classes, dispatch, registeredClasses, setRegisteredClasses }}
    >
      {children}
    </ClassContext.Provider>
  );
};

export const useClassContext = () => {
  return useContext(ClassContext);
};
