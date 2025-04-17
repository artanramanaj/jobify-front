import React, { useContext } from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { NavLinks } from "./index";
import links from "../utils/links";
const BigSidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <header>
          <Logo />
        </header>
        <div className="nav-links">
          {links.map((link, index) => {
            const { text, path, icon } = link;
            return (
              <NavLinks
                key={index + 1}
                path={path}
                className="nav-link"
                text={text}
                icon={icon}
                sidebarType="big"
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
