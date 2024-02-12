import FromDown from './fromDown'
import FromDownUp from './fromDownUp'
import FromSide from './fromSide'
import FromUp from './fromUp'
import FromUpDown from './fromUpDown'
import PopUp from './popUp'
import styles from './style.module.css'
import { skills } from '@/Data/skills'
export default function MobileParallax() {
  return (
    <div className={styles.mobileParallax}>
      <PopUp images={[skills[0],skills[1]]}/>
      <FromSide images={[skills[2],skills[3]]}/>
      <FromUp images={[skills[4],skills[5]]}/>
      <FromDown images={[skills[6],skills[7]]}/>
      <FromUpDown images={[skills[8],skills[9]]}/>
      <FromDownUp images={[skills[10],skills[11]]}/>
    </div>
  )
}
