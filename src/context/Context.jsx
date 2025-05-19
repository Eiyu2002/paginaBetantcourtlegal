import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [activate1, setActivate1] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Función para manejar el resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregamos el event listener
    window.addEventListener("resize", handleResize);

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <UserContext.Provider
      value={{ activate1, setActivate1, windowWidth, setWindowWidth }}
    >
      {children}
    </UserContext.Provider>
  );
}
