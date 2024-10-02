import styles from './style.module.css'
import educationLogo from '../assets/educationLogo.png'
import universityLogo from '../assets/universityLogo.png'
import companyLogo from '../assets/companyLogo.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';

function Education(){

    const [visibleIndex,setVisibleIndex] = useState(-1)

    function handlerFunction(index){
        if(index === visibleIndex){
            setVisibleIndex(-1)
        }
        else{
            setVisibleIndex(index)
        }
    }

    return(
        <section className={styles.page}>

            <h2 className={styles.header}>Education & Experience</h2>
            
            <div key={0} onClick={() => handlerFunction(0)} className={`${styles.accordion}`}>
                <span className={styles.icon} >{visibleIndex === 0 ? <IoIosArrowUp /> : <MdKeyboardArrowDown />}</span>
                <div className={styles.headerContainer}>
                    <img src={companyLogo} alt="Company Logo" className={styles.logo} />
                    <div className={styles.infoContainer}>
                        <h3 className={styles.title}>Lead By Tech</h3>
                        <p className={styles.position}>Front-End Web Developer Intern</p>
                    </div>
                </div>
                {
                    visibleIndex === 0
                    ? 
                    <p className={`${styles.description}`}>
                        As a Front-End Web Developer Intern at Lead By Tech Company since August 2024, I am actively exploring modern web design concepts, as well as UI/UX fundamentals.
                    </p>
                    : null
                }
            </div>

            <div key={1} onClick={() => handlerFunction(1)} className={styles.accordion}>
                <span className={styles.icon} >{visibleIndex === 1 ? <IoIosArrowUp /> : <MdKeyboardArrowDown />}</span>
                <div className={styles.headerContainer}>
                    <img src={universityLogo} alt="University Logo" className={styles.logo} />
                    <div className={styles.infoContainer}>
                        <h3 className={styles.title}>LIU</h3>
                        <p className={styles.position}>Computer Engineering Student</p>
                    </div>
                </div>
                {
                    visibleIndex === 1
                    ? 
                    <p className={styles.description}>
                        I am a third-year Computer Engineering student at the Lebanese International University, currently maintaining an impressive GPA of 3.95 out of 4.
                    </p>
                    : null
                }
            </div>

            <div key={2} onClick={() => handlerFunction(2)} className={styles.accordion}>
                <span className={styles.icon} >{visibleIndex === 2 ? <IoIosArrowUp /> : <MdKeyboardArrowDown />}</span>
                <div className={styles.headerContainer}>
                    <img src={educationLogo} alt="School Logo" className={styles.logo} />
                    <div className={styles.infoContainer}>
                        <h3 className={styles.title}>RMS</h3>
                        <p className={styles.position}>GS Student</p>
                    </div>
                </div>
                {
                    visibleIndex === 2
                    ? 
                    <p className={styles.description}>
                        I graduated from René Mouawad High School with a Baccalaureate II in General Sciences in July 2022, achieving an impressive score of 17.40 out of 20.
                    </p>
                    : null
                }
            </div>

        </section>
    )

}

export default Education