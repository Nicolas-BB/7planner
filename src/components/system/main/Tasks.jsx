import { useContext } from "react"
import { TaskContext } from "../../../routes/__dashboard/route"
import Task from "./tasks/Task"
import styles from '../../../styles/system/tasks.module.css'

export default function Tasks() {
    const { taskData, setTaskData } = useContext(TaskContext)

    return (
        <main className={styles.main}>
            {taskData.map((task, i) => (
                <Task
                    key={i}
                    {...task}
                />
            ))}
        </main>
    )
}