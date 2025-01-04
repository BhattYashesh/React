import styles from './new.module.css'

function Container()
{
    return(
        <>
            <div className={styles.content}>
        <div className={styles.wow}>
            <br></br><br></br>
            <h1 className={styles.heading1}>BEST DIGITAL <br></br>
                MARKETING <br></br>
                AGENCY
            </h1><br></br><br></br>
            <p className={styles.para1}>Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed sit <br></br>
                ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed ipsum <br></br>
                at ipsum nonumy amet. Clita lorem dolore sed stet et est justo dolore.</p><br></br><br></br>
            <button className={styles.button1}>LEARN MORE</button>
        </div>
        <div className={styles.wow}>
            <img src="../public/i1.png" alt=""></img>
        </div>
    </div>
        </>
    )
}
export default Container;