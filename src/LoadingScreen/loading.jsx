import styles from './loading.module.css'
import { slideUp } from './animation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
export default function LoadingScreen() {

  const words = ["Cos","Thats","How","I","Do","It"]
  const [index,setIndex]=useState(0);

  useEffect(()=>{
    if(index == words.length -1) return;
    setTimeout(()=>{
      setIndex(index+1)
    }, index == 0 ? 1000 : 200)
  },[index])
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.loadingScreenRelative}>
      {
        [...Array(6)].map((_,i)=>{
          return(
            <motion.div
              key={i} 
              variants={slideUp} 
              initial="initial" 
              exit="exit"
              custom={i}  
              className={styles.loadingScreenUnit}
            >
            </motion.div>
          )
        })
      }
      <h1 className={styles.loadingScreenHeading}>{words[index]}</h1>
      </div>
    </div>
  )
}
