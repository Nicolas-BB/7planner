import Week from "../week/Week.jsx"
import TasksList from "../tasks/TasksList.jsx"
import styles from "./main.module.css"

export default function Main() {
    return (
        <main className={styles.main}>
            <Week />
            <TasksList />
        </main>
    )
}