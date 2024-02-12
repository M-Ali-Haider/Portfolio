import styles from './style.module.css'
import { motion,useInView } from 'framer-motion'
import { scaleAnimation } from '@/scaleAnimation'
import Image from 'next/image'
import { useRef } from 'react'
export default function PopUp({images}) {
  const popUpContainer = useRef(null)
  const inView = useInView(popUpContainer)
  return (
    <div className={styles.popUpContainer} ref={popUpContainer}>
      {
        images.map((image,index)=>{
          return(
            <motion.div
              variants={scaleAnimation} 
              initial="initial"
              animate={inView?"open":"closed"}
              key={index} 
              className={styles.popUpImg}
              style={{backgroundColor:image.color}}
            >
              <Image 
                src={`/Portfolio/skills/${image.src}`}
                fill={true}
                alt='skills image'
              />
            </motion.div>
          )
        })
      }
    </div>
  )
}
