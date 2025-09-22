import styles from "./buttons.module.css"

export function PrimaryBtn({ children }) {
    return (
        <button className={styles.primaryBtn}>{children}</button>
    )
}

export function SecondaryBtn({ children }) {
    return (
        <button className={styles.secondaryBtn}>{children}</button>
    )
}