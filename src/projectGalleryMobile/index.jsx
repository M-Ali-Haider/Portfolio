import styles from './style.module.css'
import { projects } from '@/projectGallery/projects'
import Image from 'next/image'
export default function ProjectGalleryMobile() {
  return (
    <div className={styles.projectGalleryMobile}>
        {
            projects.map((project,index)=>{
                return <Project key={index} project={project}/>
            })
        }
    </div>
  )
}

const Project = ({project}) =>{
    return(
        <div className={styles.projectMobile}>
            <div className={styles.projectUp}>
                <div className={styles.projectImage} style={{backgroundColor:project.color}}>
                    <Image
                        src={`/Portfolio/images/${project.src}`}
                        width={300}
                        height={0}
                        alt='Project Gallery'
                    />
                </div>
                <h1>{project.name}</h1>
            </div>
            <div className={styles.projectDown}>
                <div>{project.type}</div>
                <div>{project.tech}</div>
            </div>
        </div>
    )
}