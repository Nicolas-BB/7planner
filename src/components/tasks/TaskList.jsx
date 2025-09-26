import { useState } from "react"
import { tasksData } from "./tasksData.js"
import { dayData } from "../week/dayData.js"
import styles from "./taskList.module.css"

export default function TaskList() {
    const [id, setId] = useState()

    return (
        <div className={styles.taskContainer}>
            {tasksData.map((item, i) => (
                <div className={styles.taskDiv} key={i}>
                    <p className={styles.title}>{item.title}</p>
                    <span className={styles.hour}>{item.hour}</span>
                </div>
            ))}
        </div>
    )
}