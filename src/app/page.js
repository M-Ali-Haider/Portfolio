'use client'
import styles from "./page.module.css";
import InfiniteText from "@/infiniteText/infiniteText";
import Gallery from "@/projectGallery/gallery";
import Parallax from "@/parallax/parallax";
import { useEffect, useState } from "react";
import Heading from "@/headingAnimation/heading";
import { AnimatePresence } from "framer-motion";

// import Lenis from '@studio-freight/lenis'
import LoadingScreen from "@/LoadingScreen/loading";
import About from "@/About/about";
import Footer from "@/Footer/footer";


export default function Home() {

  useEffect(()=>{


    // const lenis = new Lenis()
    // function raf(time) {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)


    // (
    //   async () =>{
    //     const LocomotiveScroll = (await import('locomotive-scroll')).default
    //     const locomotiveScroll = new LocomotiveScroll();
    //   }
    // )()

    setTimeout(()=>{
      setIsLoading(false);
      document.body.style.cursor='default'
      window.scrollTo(0,0)
    },2000)
  },[])

  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
    <AnimatePresence mode="wait">
      {isLoading && <LoadingScreen/>}
    </AnimatePresence>
    <InfiniteText/>
    <main className={styles.main}>
      <Heading heading={"About"}/>
      <About/>
      <Heading heading={"Projects"}/>
      <Gallery/>
      <Heading heading={"Skills"}/>
      <Parallax/>
      <Footer/>
    </main>
    </>
  );
}
