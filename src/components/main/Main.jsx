import Week from "../week/Week.jsx"
import Tasks from "../tasks/Tasks.jsx"
import styles from "./main.module.css"

export default function Main() {
    return (
        <main className={styles.main}>
            <Week />
            <Tasks />
        </main>
    )
}