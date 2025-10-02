import logo from "../../../assets/logo.png"
import plusIcon from "../../../assets/plusIcon.png"
import styles from "../../../styles/system/nav.module.css"
import Menu from "./Menu.jsx"
import { PrimaryBtn } from "../../buttons/Buttons.jsx"

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <Menu />
            <PrimaryBtn><img src={plusIcon} alt="Ícone de adição" className={styles.img} />Adicionar</PrimaryBtn>
        </nav>
    )
}