import React from "react";
import Navbar from "./navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <Navbar />
      <main>{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default Layout;
