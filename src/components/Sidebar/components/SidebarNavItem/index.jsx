import React from "react";
import { Nav } from "react-bootstrap";
import "./style.css";

function SidebarNavItem(props) {
  const { iconName, name, link } = props;
  return (
    <Nav.Link href={link}>
      <ion-icon name={iconName}></ion-icon>
      {name}
    </Nav.Link>
  );
}

export default SidebarNavItem;
