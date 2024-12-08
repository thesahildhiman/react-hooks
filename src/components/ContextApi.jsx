import React, { useContext } from "react";
import { ThemeContext } from "../contextApi/themeContext";

const ContextApi = () => {
  const { theme, setTheme } = useContext(ThemeContext); // getting state, set function from global theme context
  console.log({ theme, setTheme });

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        background: `${theme === "light" ? "white" : "black"}`,
      }}
    >
      <div style={{ color: `${theme === "light" ? "black" : "white"}` }}>
        use context api
      </div>

      <div style={{ color: `${theme === "light" ? "black" : "white"}` }}>
        Hello how are you?
        <button
          style={{
            backgroundColor: `${theme === "light" ? "blue" : "red"}`,
            color: `${theme === "light" ? "black" : "white"}`,
          }}
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          change theme
        </button>
      </div>
    </div>
  );
};

export default ContextApi;
