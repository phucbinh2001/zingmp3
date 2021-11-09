import React from "react";
import { Col, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo-dark.svg";
import SidebarNavItem from "./components/SidebarNavItem";
import "./style.css";

function Sidebar() {
  const menu = [
    {
      name: "Cá Nhân",
      icon: "musical-notes-outline",
      link: "/home",
    },
    {
      name: "Khám Phá",
      icon: "disc-outline",
      link: "",
    },
    {
      name: "Zingchart",
      icon: "stats-chart-outline",
      link: "",
    },
  ];
  return (
    <Col xs={2} className="sidebar">
      <a href className="logo">
        <img src={logo} alt="logo " />
      </a>
      <Nav defaultActiveKey="/home" className="flex-column">
        {menu.map((menu, index) => {
          return (
            <SidebarNavItem
              name={menu.name}
              iconName={menu.icon}
              link={menu.link}
            />
          );
        })}
        <SidebarNavItem name="Nhạc của tôi" iconName="musical-notes-outline" />
      </Nav>
    </Col>
  );
}

export default Sidebar;
