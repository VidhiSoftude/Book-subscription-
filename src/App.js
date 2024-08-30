// import express from "express";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { lazy, Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Preloader from "./layout/Preloader";
// import ReadMore from "./components/ReadMore";
import ServiceList from "./components/ServiceList";
import ReadMore from "./components/ReadMore";
import ShowBook from './components/showbook'; 

const Home = lazy(() => import("./ui/Home"));
const Career = lazy(() => import("./ui/Career"));
const Contact = lazy(() => import("./ui/Contact"));
const About = lazy(() => import("./ui/About"));
const Service = lazy(() => import("./ui/Service"));
const Login = lazy(() => import("./ui/Login"));
const Signup = lazy(() => import("./ui/Signup"));
const NoPage = lazy(() => import("./layout/NoPage"));



const App = () => (
  // return (
    <>
        <Suspense fallback={ <Preloader/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Service />} />
            <Route path="careers" element={<Career />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/product" element={<ServiceList />} />
            <Route path="/showbook" element={<ShowBook />} />
            {/* <Route path="/read-more" element={<ReadMore/>}> */}
            <Route path ="/read-more/:id" element={<ReadMore/>}/>
            <Route path="*" element={<NoPage />} />       
          </Routes>
        </Suspense>
    </>
  );


export default App;
