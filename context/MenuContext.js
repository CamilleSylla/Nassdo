import React, { useState, createContext, useEffect } from "react";

export const MenuContext = createContext();

export function MenuProvider(props) {
    const [menu, setMenu] = useState(null)
  return (
    <MenuContext.Provider value={[menu, setMenu]}>
      {props.children}
    </MenuContext.Provider>
  );
}