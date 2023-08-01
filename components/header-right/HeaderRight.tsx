import React, { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

import useOnClickOutside from "utils/useClickOutside";

import NotificationIcon from "public/bell.svg";
import SettingsIcon from "public/gear.svg";
import ProfilePic from "public/DP.jpeg";
import DropdownIcon from "public/chevron-down.svg";
import SignOutIcon from "public/signout.svg";

import stl from "./HeaderRight.module.scss";

const HeaderRight = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const ref = useRef(null);

  useOnClickOutside(() => setShowDropdown(false), ref);

  return (
    <div className={stl.headerRight}>
      <button>
        <SettingsIcon />
      </button>
      <button>
        <NotificationIcon />
        <span />
      </button>
      <div>
        <div
          ref={ref}
          className={clsx(
            stl.dropdownContainer,
            showDropdown ? stl.showDropdown : ""
          )}
        >
          <div
            className={stl.main}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Image
              src={ProfilePic}
              width={40}
              height={40}
              alt="profile-image"
            />
            <span className={stl.name}>Rana Intizar</span>
            <DropdownIcon />
          </div>
          <div className={stl.dropdown}>
            <span className={stl.item}>Account Settings</span>
            <div className={stl.divider} />
            <span className={stl.item}>
              Sign out <SignOutIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderRight;
