import React from "react";

import Button from "components/button";
import DeviceCard from "components/device-card";
import MemberItem from "components/member-item";
import LineChart from "components/line-chart";

import DownIcon from "public/chevron-down-2.svg";
import RightIcon from "public/chevron-right.svg";
import RouterIcon from "public/router.svg";
import MusicIcon from "public/music-system.svg";
import LampIcon from "public/lamp.svg";
import CalendarIcon from "public/calendar.svg";
import Person2Icon from "public/persons/person-2.svg";
import Person3Icon from "public/persons/person-3.svg";
import Person4Icon from "public/persons/person-4.svg";
import Person5Icon from "public/persons/person-5.svg";

import stl from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={stl.sidebar}>
      <div className={stl.myDevices}>
        <div className={stl.header}>
          <span className={stl.title}>My Devices</span>
          <div className={stl.right}>
            <Button label="ON" rightIcon={<DownIcon />} />
            <Button rightIcon={<RightIcon />} />
          </div>
        </div>
        <div className={stl.container}>
          <DeviceCard />
          <DeviceCard
            title="Router"
            icon={<RouterIcon />}
            bgClr="#f4c457"
            toggleBtnClr="#efc14e"
          />
          <DeviceCard
            title="Music System"
            icon={<MusicIcon />}
            bgClr="#ff9060"
            toggleBtnClr="#f2946d"
          />
          <DeviceCard
            title="Lamps"
            icon={<LampIcon />}
            bgClr="#3acbe9"
            toggleBtnClr="#3acbe9"
          />
        </div>
      </div>
      <div className={stl.members}>
        <div className={stl.header}>
          <span className={stl.title}>Members</span>
          <div className={stl.right}>
            <Button rightIcon={<RightIcon />} />
          </div>
        </div>
        <div className={stl.membersContainer}>
          <MemberItem />
          <MemberItem icon={<Person2Icon />} name="Nariya" role="Full Access" />
          <MemberItem icon={<Person3Icon />} name="Riya" role="Full Access" />
          <MemberItem icon={<Person4Icon />} name="Dad" role="Full Access" />
          <MemberItem icon={<Person5Icon />} name="Mom" role="Full Access" />
        </div>
      </div>
      <div className={stl.powerConsumed}>
        <div className={stl.header}>
          <span className={stl.title}>Power Consumed</span>
          <div className={stl.right}>
            <Button
              label="Month"
              leftIcon={<CalendarIcon />}
              rightIcon={<RightIcon />}
            />
            <Button rightIcon={<RightIcon />} />
          </div>
        </div>
        <LineChart />
      </div>
    </div>
  );
};

export default Sidebar;
