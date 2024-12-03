import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import About from "../pages/AboutPage";
import Contact from "../pages/ContactPage";
import PostDetails from "../pages/PostDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path= "/posts/:postId" element= {<PostDetails /> }/>
    </Routes>
  );
};

export default AppRoutes;