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
        if (index < infoArray.length - 1) {
            setIndex((i) => i + 1)

            projectContainer.current.scrollBy({
                top: 0,
                left: projectContainer.current.clientWidth,
                behavior: 'smooth'
            });
        }

    }

    function handlePreviousProject() {
        if (index > 0) {
            setIndex((i) => i - 1)

            projectContainer.current.scrollBy({
                top: 0,
                left: -projectContainer.current.clientWidth,
                behavior: 'smooth'
            });
        }

    }

    return (
        <section className={styles.page}>

            <h2>Projects</h2>

            <div ref={projectContainer} className={styles.mainPageContentContainer}>
                {
                    infoArray.map((project, index) =>

                        <div key={index} className={styles.project}>

                            <h2>{project.title}</h2>

                            <div className={styles.bodyContainer}>
                                <div className={styles.descriptionContainer}>
                                    <h4 className={styles.header}>Description</h4>
                                    <p>{project.description}</p>
                                </div>

                                <div className={styles.technologiesContainer}>
                                    <h4 className={styles.header}>Technologies Used</h4>
                                    <p>{project.technologies.join(" / ")}</p>
                                </div>
                            </div>

                            <div className={styles.buttons}>
                                <a target='_blank' href={project.link} className={styles.button}>View Website</a>
                                <a target='_blank' href={project.repo} className={styles.button}>Check Source Code</a>
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