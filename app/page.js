'use client'
import {  useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [isDarkMode, setDarkMode ]= useState(true);
  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
      setDarkMode(true)
      
    }else{
      setDarkMode(false)

    }
  },[])
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme= 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme= '';
    }
  },[isDarkMode])
  return (
    <>
    <Navbar isDarkMode={isDarkMode} />
    <Header />
    <About />
    <Services />
    <Work />
    <Contact />
    <Footer />
   

    </>
  );
}
