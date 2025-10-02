import styles from "../../../../styles/system/day.module.css"

export default function Day(props) {
    return (
        <div className={styles.day} >
            <p>{props.dayWeek}</p>
            <p className={styles.dayNum}>{props.dayNum}</p>
            <p>{props.dayWeather}</p>
        </div>
    )
}