import { useContext } from "react"
import { TaskContext } from "../../../routes/__dashboard/route"
import Task from "./tasks/Task"
import styles from '../../../styles/system/tasks.module.css'

export default function Tasks() {
    const { taskData, setTaskData } = useContext(TaskContext)

    function onDelete(id) {
        setTaskData(taskData => taskData.filter((task) => task.id !== id))
    }

    return (
        <main className={styles.main}>
            {taskData.map((task) => (
                <Task
                    key={task.id}
                    {...task}
                    onDelete={() => onDelete(task.id)}
                    day={task.day}
                />
            ))}
        </main>
    )
}