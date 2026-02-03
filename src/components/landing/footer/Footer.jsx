import logo from "../../../assets/logo.png"
import appStore from "../../../assets/appStore.png"
import googlePlay from "../../../assets/googlePlay.png"
import linkedin from "../../../assets/linkedin.png"
import facebook from "../../../assets/facebook.png"
import whatsapp from "../../../assets/whatsapp.png"
import instagram from "../../../assets/instagram.png"
import styles from "../../../styles/landing/footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.containerDiv}>
                <div className={styles.linksContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <div className={styles.socialLinksDiv}>
                        <img src={linkedin} alt="LinkedIn" />
                        <img src={facebook} alt="Facebook" />
                        <img src={whatsapp} alt="WhatsApp" />
                        <img src={instagram} alt="Instagram" />
                    </div>
                </div>
                <div className={styles.div}>
                    <h3 className={styles.h3}>Links úteis</h3>
                    <ul className={styles.ul}>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div className={styles.imgDiv}>
                    <img src={appStore} alt="App Store" />
                    <img src={googlePlay} alt="Google Play" />
                </div>
            </div>
        </footer>
    )
}