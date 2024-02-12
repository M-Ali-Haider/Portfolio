import styles from '../style.module.css'
import { motion, useInView } from 'framer-motion'
import { fromDown, fromUp } from '@/fromSide'
import Image from 'next/image'
import { useRef } from 'react'
export default function FromUpDown({images}) {
    const fromUpContainer = useRef(null)
    const inView = useInView(fromUpContainer)
  return (
    <div className={styles.fromSide} ref={fromUpContainer}>
        <motion.div
            variants={fromUp}
            initial="initial"
            animate={inView?"open":"closed"} 
            className={styles.fromLeft} 
            style={{backgroundColor:images[0].color}}
        >
            <Image
                src={`/Portfolio/skills/${images[0].src}`}
                fill={true}
                alt='skills image'
            />
        </motion.div>
        <motion.div
            variants={fromDown}
            initial="initial"
            animate={inView?"open":"closed"} 
            className={styles.fromRight} 
            style={{backgroundColor:images[1].color}}
        >
            <Image
                src={`/Portfolio/skills/${images[1].src}`}
                fill={true}
                alt='skills image'
            />
        </motion.div>
    </div>
  )
}
