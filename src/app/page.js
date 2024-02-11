'use client'
import styles from "./page.module.css";
import InfiniteText from "@/infiniteText/infiniteText";
import Gallery from "@/projectGallery/gallery";
import Parallax from "@/parallax/parallax";
import { useEffect } from "react";
import Heading from "@/headingAnimation/heading";

// import LocomotiveScroll from "locomotive-scroll";
import Lenis from '@studio-freight/lenis'


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
  },[])

  return (
    <>
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
