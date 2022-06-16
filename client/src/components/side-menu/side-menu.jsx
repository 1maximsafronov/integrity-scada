import React from "react";
import PropTypes from "prop-types";
import SideMenuItem from "./side-menu-item";
import {useLocation} from "react-router-dom";

const SideMenu = (props) => {
  const {items} = props;
  const location = useLocation();

  return (
    <div className="page-content__side-menu side-menu">
      <ul className="side-menu__list">

        {items.map((item, index) => (
          <SideMenuItem key={`side-item-${item.name}-${index}`}
            value={item}
            isActive={location.pathname === item.path}
          />
        ))}

      </ul>
    </div>
  );
};

SideMenu.propTypes = {
  items: PropTypes.array,
};

export default SideMenu;
