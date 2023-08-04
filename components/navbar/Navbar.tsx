import React from "react";

import HomeIcon from "public/home.svg";
import DashboardIcon from "public/dashboard.svg";
import LampIcon from "public/lamp.svg";
import SecurityIcon from "public/security.svg";
import LocationIcon from "public/location.svg";
import FamilyIcon from "public/persons.svg";
import CellularIcon from "public/cellular.svg";
import SignOutIcon from "public/sign-out-2.svg";

import stl from "./Navbar.module.scss";

const Navbar = () => {
  const [active, setIsActive] = React.useState("");

  const items = [
    { title: "Home", icon: <HomeIcon /> },
    { title: "Dashboard", icon: <DashboardIcon /> },
    { title: "Lamp", icon: <LampIcon /> },
    { title: "Security", icon: <SecurityIcon /> },
    { title: "Location", icon: <LocationIcon /> },
    { title: "Family", icon: <FamilyIcon /> },
    { title: "Cellular", icon: <CellularIcon /> },
  ];

  return (
    <div className={stl.navbar}>
      <div>
        {items.map((item, i) => (
          <button
            key={i}
            className={active === item.title ? stl.active : ""}
            onClick={() => setIsActive(item.title)}
          >
            <span></span>
            {item.icon}
            <span></span>
          </button>
        ))}
      </div>
      <div>
        <button className={stl.signOutBtn}>
          <SignOutIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
