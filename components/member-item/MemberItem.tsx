import React from "react";

import PersonIcon from "public/persons/person-1.svg";

import stl from "./MemberItem.module.scss";

interface Props {
  icon: React.ReactNode;
  name: string;
  role: string;
}

const MemberItem = ({ icon, name, role }: Props) => {
  return (
    <div className={stl.memberItem}>
      <div className={stl.imgContainer}>{icon}</div>
      <span className={stl.name}>{name}</span>
      <span className={stl.role}>{role}</span>
    </div>
  );
};

MemberItem.defaultProps = {
  icon: <PersonIcon />,
  name: "Rana",
  role: "Admin",
};

export default MemberItem;
