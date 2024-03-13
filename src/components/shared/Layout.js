import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.js";
import Header from "./Header.js";

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen">
      <Sidebar/>
      <div className="flex-1" style={{backgroundColor:"#202020"}}>
        <Header/>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;