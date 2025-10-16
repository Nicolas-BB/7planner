import Week from "./week/Week.jsx"
import TasksList from "./tasks/TasksList.jsx"
import styles from "../../../styles/system/main.module.css"
import { useState } from "react"

export default function Main() {
    const [selection, setSelection] = useState(0)

    return (
        <main className={styles.main}>
            <Week selection={selection} setSelection={setSelection} />
            <TasksList selection={selection} />
        </main>
    )
}