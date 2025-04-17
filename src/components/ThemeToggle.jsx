import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Wrapper from "../assets/wrappers/ThemeToggle";
import { useDashboardContext } from "../pages/DashboardLayout";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <Wrapper>
      {!isDarkTheme ? (
        <BsFillMoonFill className="toggle-icon" onClick={toggleDarkTheme} />
      ) : (
        <BsFillSunFill className="toggle-icon" onClick={toggleDarkTheme} />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;
