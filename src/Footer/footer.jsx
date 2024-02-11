import { useRef } from 'react'
import styles from './footer.module.css'
import { motion,useInView } from 'framer-motion'
import { slideUp } from '@/About/aboutAnimation'

export default function Footer() {
    const footerContainer = useRef(null)
    const inView = useInView(footerContainer)
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
            <div className={styles.footerSocials}>
                <div 
                    className={styles.footerSocialsUnit}
                    onMouseEnter={()=>{document.body.style.backgroundColor="#01411c"}} 
                    onMouseLeave={()=>{document.body.style.backgroundColor="#121111"}}
                >
                    +92 320 5657362
                </div>
                <div
                    className={styles.footerSocialsUnit} 
                    onMouseEnter={()=>{document.body.style.backgroundColor="red"}} 
                    onMouseLeave={()=>{document.body.style.backgroundColor="#121111"}}
                >
                    Gmail
                </div>
                <div 
                    className={styles.footerSocialsUnit}
                    onMouseEnter={()=>{document.body.style.backgroundColor="#0a66c2"}} 
                    onMouseLeave={()=>{document.body.style.backgroundColor="#121111"}}
                >
                    LinkedIn
                </div>
            </div>
        </div>
    </footer>
  )
}
