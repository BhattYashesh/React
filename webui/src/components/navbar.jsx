import styles from './new.module.css'
 function Navbar()
 {
    return (
        <>
        <div>
            <header>
        <div className={styles.wow}>
            <br></br>
            <h1>DOT.NET</h1>
        </div>
        <div className={styles.navbar}>
            <br></br><br></br>
            <nav>
                <ul>

                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>PRICES</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>
    </header>
    
        </div>
        </>
    )
 }

 export default Navbar;