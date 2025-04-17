import React, { useContext } from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();

  console.log("dashboard", showSidebar);

  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <header>
          <Logo />
        </header>
        <div className="nav-links">
          {links.map((link) => {
            const { text, path, icon } = link;
            return (
              <NavLink to={path} className="nav-link" key={text}>
                <span className="icon">{icon}</span> {text}
              </NavLink>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
