import styles from './style.module.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useState, useRef } from 'react'
import { info } from './info'


function Projects() {

    const [index, setIndex] = useState(0);
    const infoArray = [...info];

    const projectContainer = useRef()

    function handleNextProject() {
        if (index < 2) {
            setIndex((i) => i + 1)

            projectContainer.current.scrollBy({
                top: 0,
                left: projectContainer.current.clientWidth,
                behavior: 'smooth'
            });
        }
        else{
            projectContainer.current.scrollBy({
                top: 0,
                left: -projectContainer.current.clientWidth  * 3,
                behavior: 'smooth'
            });
            setIndex(0)
        }
    }

    function handlePreviousProject() {
        if (index > 0) {
            setIndex((i) => i - 1)

            projectContainer.current.scrollBy({
                top: 0,
                left: -projectContainer.current.clientWidth ,
                behavior: 'smooth'
            });
        }
        else{
            projectContainer.current.scrollBy({
                top: 0,
                left: projectContainer.current.clientWidth  * 3,
                behavior: 'smooth'
            });
            setIndex(2)
        }
    }

    return (
        <section className={styles.page}>

            <div ref={projectContainer} className={styles.mainPageContentContainer}>
                {
                    infoArray.map((project, index) =>

                        <div key={index} className={styles.project}>

                            <img className={styles.projectImage} src={project.image} alt={project.alt} />

                            <div className={styles.projectInfo}>

                                <h2 className={styles.title}>{project.title}</h2>

                                <p className={styles.description}>
                                    {project.description}
                                </p>

                                <div className={styles.technologiesContainer}>
                                    <h4 className={styles.technologiesHeader}>Technologies Used</h4>
                                    <ul className={styles.technologiesList}>
                                        {
                                            project.technologies.map((element, index) => <li key={index}>{element}</li>)
                                        }
                                    </ul>
                                </div>

                                <div className={styles.buttons}>
                                    <a target='_blank' href={project.link} className={styles.button}>View Website</a>
                                    <a target='_blank' href={project.repo} className={styles.button}>Check Source Code</a>
                                </div>

                            </div>

                        </div>
                    )
                }
            </div>

            <div className={styles.navigationContainer}>

                <span onClick={handlePreviousProject} className={styles.icon}>< MdOutlineKeyboardArrowLeft /></span>

                <p className={styles.index}>{index + 1} / {infoArray.length}</p>

                <span onClick={handleNextProject} className={styles.icon}>< MdOutlineKeyboardArrowRight /></span>

            </div>

        </section>
    )

}

export default Projects