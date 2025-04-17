import React from "react";
import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
const NavLinks = ({ path, text, icon, sidebarType }) => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <div className="nav-links">
      <NavLink
        to={path}
        className="nav-link"
        key={text}
        onClick={sidebarType == "small" ? toggleSidebar : ""}
        end
      >
        <span className="icon">{icon}</span>
        {text}
      </NavLink>
    </div>
  );
};

export default NavLinks;
