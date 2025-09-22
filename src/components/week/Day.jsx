import styles from "./day.module.css"

export default function Day() {
    return (
        <div className={styles.day}>
            <p className={styles.weekDay}>D</p>
            <p className={styles.dayNum}>1</p>
            <p className={styles.dayWeather}>🌞</p>
        </div>
    )
}