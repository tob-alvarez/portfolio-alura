// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";

export const Contexto = createContext();

// eslint-disable-next-line react/prop-types
const ProviderContexto = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <Contexto.Provider value={{ dark, setDark }}>{children}</Contexto.Provider>
  );
};

export default ProviderContexto;
