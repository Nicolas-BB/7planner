import styles from "./day.module.css"

export default function Day({ dayWeek, dayNum, dayWeather, id, selectedDay, setId }) {
    return (
        <div key={id} className={`${styles.day} ${id === selectedDay && styles.daySelected}`} onClick={() => setId(id)} >
            <p>{dayWeek}</p>
            <p className={styles.dayNum}>{dayNum}</p>
            <p>{dayWeather}</p>
        </div>
    )
}