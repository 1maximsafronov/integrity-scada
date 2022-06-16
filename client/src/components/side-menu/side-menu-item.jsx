import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";
import SideMenuSubmenu from "./side-menu-submenu";
import PropTypes from "prop-types";

const SideMenuItem = (props) => {
  const {value, isActive} = props;
  const {name, path, submenu = []} = value;
  const [opened, setOpened] = useState(false || isActive);

  const handleToggleClick = ()=> {
    setOpened(!opened);
  };

  useEffect(()=> {
    setOpened(isActive);
  }, [isActive]);


  return (
    <li className={classNames(`side-menu__item`, {"side-menu__item--active": isActive}, {"side-menu__item--opened": opened})}>

      <Link to={path} className="side-menu__link">
        {name}
      </Link>

      <SideMenuSubmenu items={submenu} onToggleClick={handleToggleClick}/>
    </li>
  );
};

SideMenuItem.propTypes = {
  isActive: PropTypes.bool,
  value: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    submenu: PropTypes.array
  })
};

export default SideMenuItem;
