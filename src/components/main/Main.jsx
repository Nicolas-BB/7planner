import Week from "../week/Week.jsx"
import Tasks from "../tasks/Tasks.jsx"
import styles from "./main.module.css"
import { useState } from "react"

export default function Main() {

    const [selectedDay, setSelectedDay] = useState()

    return (
        <main className={styles.main}>
            <Week selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
            <Tasks selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
        </main>
    )
}