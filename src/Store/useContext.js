import React, { createContext, useContext, useState } from "react";

export const Template = createContext();

export const MyProvider = ({ children }) => {
  const [image, setImage] = useState();
  const [id, setId] = useState();

  return (
    <Template.Provider value={{ image, setImage, id, setId }}>
      {children}
    </Template.Provider>
  );
};

export const useGlobalContext = () => {
  const myContext = useContext(Template);

  return myContext;
};
