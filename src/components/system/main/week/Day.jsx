import styles from "../../../../styles/system/day.module.css"

export default function Day(props) {
    return (
        <button className={`${styles.day} ${props.selected && styles.daySelected}`} onClick={props.click} >
            <p>{props.dayWeek}</p>
            <p className={styles.dayNum}>{props.dayNum}</p>
            <p>{props.dayWeather}</p>
        </button>
    )
}