import styles from './style.module.css'

function Header({ setScrollIntoViewIndex }) {

    function handleClick(index){
        setScrollIntoViewIndex(index);
    }


    return (
        <header className={styles.page}>

            <div className={styles.headerItem} onClick={() => handleClick(3)}>
                <h2>Education</h2>
            </div>
            
            <div className={styles.headerItem} onClick={() => handleClick(1)}>
                <h2>CV</h2>
            </div>

            <div className={styles.headerItem} onClick={() => handleClick(2)}>
                <h2>Projects</h2>
            </div>

        </header>
    )

}

export default Header