import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <div className="container-scroller">
        <Header />
        {/* <Sidebar /> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
