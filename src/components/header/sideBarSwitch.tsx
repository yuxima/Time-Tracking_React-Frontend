import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PropSidebar } from "../../types/PropSidebar";
import Sidebar from "../sidebar/sidebar";

const SwitchSideBar: React.FC<PropSidebar> = ({
  sideBarOpen,
  handleDrawerOpenClose,
}) => {
  return (
    <>
      <IconButton onClick={handleDrawerOpenClose}>
        <MenuIcon />
      </IconButton>

      <Sidebar
        sideBarOpen={sideBarOpen}
        handleDrawerOpenClose={handleDrawerOpenClose}
      />
    </>
  );
};

export default SwitchSideBar;
