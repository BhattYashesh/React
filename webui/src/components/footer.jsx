import styles from './new.module.css'

 function Footer()
 {
    return(
        <>
          <footer>
          <div className={styles.p}>
            <br></br><br></br><br></br>
            <h1><b>DOT.NET</b></h1> <br></br><br></br>
            <p>consectetur adipiscing elit, sed do <br></br>
                eiusmod tempor incididunt ut labore<br></br>
                et dolore magna aliqua. Ut enim ad </p><br></br><br></br><br></br>
        </div>
        <div className={styles.q}>
            <br></br><br></br><br></br>
            <h1><b>Quick Links</b></h1> <br></br><br></br>
            <p>
                <li> Home </li><br></br>
                <li>About Us</li> <br></br>
                <li>Our Services</li> <br></br>
                <li>Pricing Plan</li> <br></br>
                <li>Meet The Team</li> <br></br>
                <li>Contact Us </li>
            </p>
        </div>
        <div className={styles.r}>
            <br></br><br></br><br></br>
            <h1><b>Get In Touch</b></h1> <br></br><br></br>
            <p>
                consectetur adipiscing elit, sed do <br></br>
                eiusmod tempor incididunt ut labore<br></br>
                et dolore magna aliqua. Ut enim ad <br></br><br></br>
            </p>
          
                
        </div>
        <div className={styles.s}>
            <br></br><br></br><br></br>
            <h1><b>Newsletter</b></h1><br></br><br></br>
            <p>
                consectetur adipiscing elit, sed do <br></br>
                eiusmod tempor incididunt ut labore<br></br>
                et dolore magna aliqua. Ut enim ad <br></br><br></br>
            </p>
            <input type="email" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Enter Your Email"></input><br></br><br></br>
            <button>SUBSCRIBE</button>

        </div>
          </footer>
        </>
    )
 }
 export default Footer;