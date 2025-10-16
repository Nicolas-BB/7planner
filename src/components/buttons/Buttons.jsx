import styles from "../../styles/buttons.module.css"

export function PrimaryBtn({ click, children }) {
    return (
        <button className={styles.primaryBtn} onClick={click}>{children}</button>
    )
}

export function SecondaryBtn({ click, children }) {
    return (
        <button className={styles.secondaryBtn}>{children}</button>
    )
}