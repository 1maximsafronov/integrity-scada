import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const SideMenuSubmenu = (props) => {
  const {items, onToggleClick} = props;

  if (!items || items.length <= 0) {
    return null;
  }

  return (
    <>
      <button className="side-menu__toggler" onClick={onToggleClick}>
        <svg className="side-menu__toggler-icon" width="7" height="15" fill="none" stroke="#003968">
          <use xlinkHref="img/sprite.svg#icon-arrow"></use>
        </svg>
      </button>

      <ul className="side-menu__submenu">
        {items.map((item, index) => {
          return (
            <li key={`sub-sidemenu-${item.name}-${index}`} className="side-menu__submenu-item">
              <Link to={item.path} className="side-menu__submenu-link">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

SideMenuSubmenu.propTypes = {
  items: PropTypes.array,
  onToggleClick: PropTypes.func,
};

export default SideMenuSubmenu;
