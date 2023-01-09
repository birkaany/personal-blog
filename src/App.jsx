import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PostList from "./components/PostList";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <PostList />
      <Footer />
    </>
  );
}
