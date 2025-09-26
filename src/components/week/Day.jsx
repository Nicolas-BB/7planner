import { useState } from "react"
import { dayData } from "./dayData.js"
import styles from "./day.module.css"

export default function Day() {
    const [id, setId] = useState(0)
    return (
        <>
            {dayData.map((day, i) => (
                <div key={i} className={` ${styles.day} ${id === i && styles.daySelected}` } onClick={() => { setId(i); console.log('fuck you', i, ' ', id) }} >
                    <p>{day.dayWeek}</p>
                    <p className={styles.dayNum}>{day.dayNum}</p>
                    <p>{day.dayWeather}</p>
                </div>
            ))}
        </>
    )
}