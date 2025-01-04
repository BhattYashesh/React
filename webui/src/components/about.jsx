import styles from './new.module.css'

function About()
{
     return (
        <>
            <div className={styles.about}>
        <div className={styles.c}>
            <img src="../public/i2.jpg" alt=""></img>
        </div>
        <div className={styles.d}>
            <br></br><br></br>
            <h1 className={styles.abth1}>BEST DIGITAL AGENCY <br></br>
                IN DOWNTOWN
            </h1><br></br><br></br>
            <b className={styles.abtb}>CLITA ELITR ET AMET ET IPSUM SEA. IPSUM STET KASD EA ET NO EST <br></br>
                DUO DIAM. LOREM DOLORES EOS UT NONUMY IPSUM SIT CLITA <br></br>
                LOREM NO AMET DOLOR DOLORE, STET SIT DOLOR JUSTO</b><br></br><br></br>
            <p>Eirmod est dolor nonumy sea amet dolore erat sit dolor et dolor vero. <br></br>
                Tempor ipsum at justo amet at ipsum justo. Aiam kasd sea sit dolor duo<br></br>
                elitr dolor amet, justo est ipsum amet dolor ut ipsum. Labore diam et<br></br>
                nonumy amet dolores. Volup sit labore dolores erat, magna justo sed<br></br>
                lorem kasd ea dolor. Labore sit clita invidunt, est dolores lorem sed ipsum <br></br>
                kasd no amet ipsum.</p><br></br><br></br>
            <button>READ MORE</button>

        </div>
    </div>
        </>
     )
}
export default About;