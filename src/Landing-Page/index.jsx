import styles from './style.module.css'
import Picture1 from '../assets/Picture1.png'
import 'animate.css';
import { useState, useEffect } from 'react';
import CV from '../assets/Hady Safa - Computer Engineering Student.pdf'


function LandingPage() {

    const [viewImage,setViewImage] = useState(false)
    const imageDelay = 1000;

    useEffect( () => {

        const timeoutId = setTimeout( () => {
            setViewImage(true)
        },imageDelay)

        return () => clearTimeout(timeoutId)
        
    },[])

    return (
        <section className={styles.page}>

            <img src={Picture1} alt='Photo of me' className={`${styles.image} ${viewImage ? styles.visibleImage : styles.hiddenImage}`} />

            <div className={`${styles.mainSection} ${viewImage ? styles.visibleSection : styles.hiddenSection}`}>

                <div className={styles.info}>
                    <p>Hello, I am</p>
                    <h1 className={styles.name}>Hady Safa</h1>
                    <p>-Computer Engineering Student-</p>
                </div>

                <div className={styles.buttons}>
                    <button className={styles.button}>About Me</button>
                    <button className={styles.button}>Get In Touch</button>
                    <a href={CV} target='_blank' className={styles.button}>CV</a>
                </div>

            </div>

        </section>
    )


}

export default LandingPage