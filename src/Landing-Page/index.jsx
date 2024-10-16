import styles from './style.module.css'
import Picture1 from '../assets/Picture1.png'
import 'animate.css';
import { useState, useEffect } from 'react';


function LandingPage({setScrollIntoViewIndex}) {

    const [viewImage,setViewImage] = useState(false)
    const delay = 1000;

    useEffect( () => {

        const timeoutId = setTimeout( () => {
            setViewImage(true)
        },delay)

        return () => clearTimeout(timeoutId)
        
    },[]);

    function handleClick(index){
        setScrollIntoViewIndex(index)
    }

    return (
        <section className={styles.page}>

            <img src={Picture1} alt='Photo of me' className={`${styles.image} ${viewImage ? styles.visibleImage : styles.hiddenImage}`} />

            <div className={`${styles.mainSection} ${viewImage ? styles.visibleSection : styles.hiddenSection}`}>

                <div className={styles.info}>
                    <p>Hello, I am</p>
                    <h1 className={styles.name}>Hady Safa</h1>
                    <p>Computer Engineering Student</p>
                </div>

                <div className={styles.buttons}>
                    <a onClick={() => handleClick(1) } className={styles.button}>About Me</a>
                    <a onClick={() => handleClick(4)} className={styles.button}>Get In Touch</a>
                </div>

            </div>

        </section>
    )


}

export default LandingPage