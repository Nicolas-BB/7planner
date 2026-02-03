import logo from "../../../assets/logo.png"
import plusIcon from "../../../assets/plusIcon.png"
import styles from "../../../styles/system/nav.module.css"
import Menu from "./Menu.jsx"
import { PrimaryBtn } from "../../buttons/Buttons.jsx"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import CreateTask from './CreateTask.jsx'

export default function Nav() {
    const [modal, setModal] = useState(false)
    const modalRef = useRef()

    useEffect(() => {
        let handler = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModal(false)
            }
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [])

    return (
        <nav className={styles.nav}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <Menu />
            <PrimaryBtn click={() => setModal(true)}><img src={plusIcon} alt="Ícone de adição" className={styles.img} />Adicionar</PrimaryBtn>
            {modal && createPortal(
                <CreateTask modalRef={modalRef} />,
                document.body
            )}
        </nav>
    )
}