import React from "react";
import Navbar from "../Navbar/Navbar";
import Foot from "../Footer/Foot";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Foot></Foot>
    </div>
  );
};

export default Root;
