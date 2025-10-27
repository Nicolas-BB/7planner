import { useState } from "react"
import logo from "../../../assets/logo.png"
import styles from "../../../styles/landing/header.module.css"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <button
                className={styles.menuBtn}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>
            <ul className={`${styles.ul} ${menuOpen ? styles.showMenu : ''}`}>
                <li><a href="#" className={styles.a}>Baixar agora</a></li>
                <li><a href="#">Início</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </header>
    )
}