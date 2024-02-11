'use client'
import styles from "./page.module.css";
import InfiniteText from "@/infiniteText/infiniteText";
import Gallery from "@/projectGallery/gallery";
import Parallax from "@/parallax/parallax";
import { useEffect, useState } from "react";
import Heading from "@/headingAnimation/heading";
import { AnimatePresence } from "framer-motion";

// import LocomotiveScroll from "locomotive-scroll";
import Lenis from '@studio-freight/lenis'
import LoadingScreen from "@/LoadingScreen/loading";


export default function Home() {

  // useEffect(()=>{
  //   const locomotiveScroll = new LocomotiveScroll();
  // },[])

  useEffect(()=>{
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    setTimeout(()=>{
      setIsLoading(false);
      document.body.style.cursor='default'
    },2000)
  },[])

  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
    {isLoading && <LoadingScreen/>}
    <InfiniteText/>
    <main className={styles.main}>
      <Heading heading={"Projects"}/>
      <Gallery/>
      <Heading heading={"Skills"}/>
      <Parallax/>
    </main>
    </>
  );
}
