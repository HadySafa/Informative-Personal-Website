
import styles from './style.module.css'
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { LuGithub } from "react-icons/lu";


function Contact() {



    return (

        <footer className={styles.page}>

            <div>
                <h3 className={styles.message}>Let Us Stay Connected!</h3>
            </div>

            <div className={styles.iconsContainer}>

                <a aria-label="Connect on LinkedIn"
                    target="_blank"
                    href="https://www.linkedin.com/in/hadyabdallahsafa/"
                    title="Connect on LinkedIn!" className={styles.icon}><FaLinkedin /></a>

                <a title="Visit my Github!"
                    target="_blank"
                    aria-label="Visit my Github!"
                    href="https://github.com/HadySafa" className={styles.icon}><LuGithub />
                </a>

                <a aria-label="Send an Email!"
                    target="_blank"
                    href="mailto:hadyabdallahsafa@gmail.com"
                    title="Send an Email!" className={styles.icon}><IoMdMail /></a>

                <a title="Call Me!"
                    aria-label="Call Me!"
                    target="_blank"
                    href="tel:+96170860816" className={styles.icon}><FaPhone /></a>

                <a title="Text via Whatsapp!"
                    target="_blank"
                    aria-label="Text via Whatsapp !"
                    href="https://wa.me/96170860816" className={styles.icon}><IoLogoWhatsapp />
                </a>

            </div>

        </footer >
    )

}

export default Contact