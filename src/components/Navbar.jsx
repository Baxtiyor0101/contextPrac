import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link>about</Link>
        <Link>about</Link>
        <Link>about</Link>
        <Link>about</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
