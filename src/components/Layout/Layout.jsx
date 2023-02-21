import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <main className="container mx-auto px-6 md:px-0">
      <Header />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
