import { useRef } from 'react'
import styles from './footer.module.css'
import { motion,useInView } from 'framer-motion'
import { slideUp } from '@/About/aboutAnimation'

const scaleAnimation = {
    initial: {scale: 0},
    open: {scale: 1,transition: {duration: 0.45, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0,transition: {duration: 0.45, ease: [0.32, 0, 0.67, 0]}}
}

export default function Footer() {
    const footerContainer = useRef(null)
    const footerSocials = useRef(null)
    const inView = useInView(footerContainer)
    const socialsInView = useInView(footerSocials)
    const message = "Let's work together!"
  return (
    <footer className={styles.footer}>
        <div className={styles.footerMain}>
            <p className={styles.footerStarter} ref={footerContainer}>
                {
                    message.split(" ").map((word,index)=>{
                        return(
                            <span key={`footer_${index}`} className={styles.masku}>
                                <motion.span
                                    variants={slideUp}
                                    custom={index}
                                    initial="initial"
                                    animate={inView?"open":"closed"}
                                    className={styles.spanner}
                                >
                                {word}
                                </motion.span>
                            </span>
                        )
                    })
                }
            </p>
            <div className={styles.footerSocials} ref={footerSocials}>
                <motion.div 
                    variants={scaleAnimation}
                    initial="initial"
                    animate={socialsInView?"open":"closed"}
                    className={styles.footerSocialsUnit}
                    onMouseEnter={()=>{document.body.style.backgroundColor="#01411c"}} 
                    onMouseLeave={()=>{document.body.style.backgroundColor="#121111"}}
                >
                    +92 320 5657362
                </motion.div>
                <motion.div
                    variants={scaleAnimation}
                    initial="initial"
                    animate={socialsInView?"open":"closed"}
                    className={styles.footerSocialsUnit} 
                    onMouseEnter={()=>{document.body.style.backgroundColor="red"}} 
                    onMouseLeave={()=>{document.body.style.backgroundColor="#121111"}}
                >
                    Gmail
                </motion.div>
                <motion.div 
                    variants={scaleAnimation}
                    initial="initial"
                    animate={socialsInView?"open":"closed"}
                    className={styles.footerSocialsUnit}
                    onMouseEnter={()=>{document.body.style.backgroundColor="#0a66c2"}} 
                    onMouseLeave={()=>{document.body.style.backgroundColor="#121111"}}
                >
                    LinkedIn
                </motion.div>
            </div>
        </div>
    </footer>
  )
}
