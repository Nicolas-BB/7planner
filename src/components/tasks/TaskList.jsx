import { tasksData } from "./tasksData.js"
import styles from "./taskList.module.css"

export default function TaskList() {
    return (
        <div className={styles.taskContainer}>
            {tasksData.map((item, i) => (
                <div className={styles.taskDiv} key={i} >
                    <p className={styles.title}>{item.title}</p>
                    <span className={styles.hour}>{item.hour}</span>
                </div>
            ))}
        </div>
    )
}