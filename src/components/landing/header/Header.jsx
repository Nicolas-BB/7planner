import logo from "../../../assets/logo.png"
import styles from "../../../styles/landing/header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <ul className={styles.ul}>
                <li><a href="#" className={styles.a}>Baixar agora</a></li>
                <li><a href="#">Início</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </header>
    )
}