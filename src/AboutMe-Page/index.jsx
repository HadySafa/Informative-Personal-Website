import styles from './style.module.css'
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import CV from '../assets/Hady Safa - Computer Engineering Student.pdf'


function About() {


    return (
        <section className={styles.page}>

            <h2 className={styles.title}>Let me present myself</h2>

            <p className={styles.paragraph}>
                Hady Safa, a third-year computer engineering student who is passionate about programming. I make time to sharpen my skills through practice and education, and I believe that I can grow my abilities with hard work and dedication. This mindset helps me build the strength to take on new challenges.
            </p>

            <div className={styles.info}>
                <div className={styles.infoSubSections}>
                <span className={styles.icon}><IoLocationSharp/></span>
                    <p>Beirut, Lebanon</p>
                </div>
                <div className={styles.infoSubSections}>
                    <span className={styles.icon}><FaCalendar/></span>
                    <p>21 October 2004</p>
                </div>
            </div>

            <a href={CV}  target='_blank' className={styles.button}><span className={styles.ping}></span>CV</a>

        </section>
    )

}

export default About