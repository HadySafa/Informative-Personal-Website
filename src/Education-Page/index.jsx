import styles from './style.module.css'
import { info } from './info.js'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from 'react';
import 'animate.css';

function Education() {

    const [visibleAccordion,setVisibleAccordion] = useState(false)

    const [visibleIndex, setVisibleIndex] = useState(-1)
    const infoArray = [...info]

    function handlerFunction(index) {
        if (index === visibleIndex) {
            setVisibleIndex(-1)
        }
        else {
            setVisibleIndex(index)
        }
    }

    useEffect( () => {
        
        function handlerFunction(e){
            if(e.target.id === "mainPage"){
                setVisibleIndex(-1)
            }
        }

        window.addEventListener("click",handlerFunction);

        return () => window.removeEventListener("click",handlerFunction);

    },[])

    return (

        <section id="mainPage" className={styles.page}>

            <h2 className={styles.header}>Education & Experience</h2>

            {
                infoArray.map((element, index) =>

                    <div key={index} onClick={() => handlerFunction(index)} className={ `${visibleAccordion ? "animate__animated animate__bounce" : null} ${styles.accordion}`}>

                        <span className={styles.icon} >{visibleIndex === index ? <IoIosArrowUp /> : <MdKeyboardArrowDown />}</span>

                        <div className={styles.headerContainer}>

                            <img src={element.image} alt={element.alt} className={styles.logo} />

                            <div className={styles.infoContainer}>

                                <h3 className={styles.title}>{element.title}</h3>

                                <p className={styles.position}>{element.position}</p>

                            </div>

                        </div>

                        <div className={`${styles.descriptionContainer}  ${visibleIndex === index ? styles.active : null}`}>
                            {
                                
                                <p className={`${styles.description}`}>
                                    {element.description}
                                </p>
                                
                            }
                        </div>

                    </div>

                )
            }

        </section>
    )

}

export default Education