import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";
import menuList from "../contants/menuItems";
import logo from "../logo.svg";

export default function NavBar() {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <figure className="navbar-logo">
          <img src={logo} alt="logo" />
        </figure>

        {isLargeScreen ? (
          <ul className="navbar-list">
            {menuList.map((item) => (
              <li className="navbar-list-item" key={item.name}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <DropdownMenu trigger="Menu" triggerType="button">
            <DropdownItemGroup>
              {menuList.map((item) => (
                <DropdownItem key={item.name}>
                  <Link className="navbar-dropdown-item" to={item.path}>
                    {item.name}
                  </Link>
                </DropdownItem>
              ))}
            </DropdownItemGroup>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
}
