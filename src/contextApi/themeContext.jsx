import { createContext, useState } from "react";

export const ThemeContext = createContext(null); // create context with null value

export const ThemeState = ({ children }) => {
  const [theme, setTheme] = useState("light"); // default theme set to light

  return (
    // wrapper for app main component
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
