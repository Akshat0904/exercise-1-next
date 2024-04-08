import { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { ILayoutProps } from "./layout.interface";

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav: () => void = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <>
      <Header toggleNav={toggleNav} />
      <Sidebar isNavOpen={isNavOpen} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
