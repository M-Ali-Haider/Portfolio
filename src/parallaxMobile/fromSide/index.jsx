import styles from '../style.module.css'
import { motion, useInView } from 'framer-motion'
import { fromLeft,fromRight } from '@/fromSide'
import Image from 'next/image'
import { useRef } from 'react'
export default function FromSide({images}) {
    const fromSide = useRef(null)
    const inView = useInView(fromSide)
  return (
    <div className={styles.fromSide} ref={fromSide}>
        <motion.div
            variants={fromLeft}
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
            variants={fromRight}
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
