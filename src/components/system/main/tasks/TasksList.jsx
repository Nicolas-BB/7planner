import styles from "../../../../styles/system/tasksList.module.css"
import Tag from "./Tag.jsx"
import Task from "./Task.jsx"
import { TaskContext } from "../../../../routes/__dashboard/route.tsx"
import { tagsData } from "./tagsData.js"
import plusIcon from "../../../../assets/plusIcon.png"
import { useContext } from "react"

export default function TasksList({ selection }) {
    const { taskData, setTaskData } = useContext(TaskContext)
    const tasksQtd = taskData.filter(task => task.day == selection).length

    function onDelete(index) {
        setTaskData(taskData => taskData.filter((_, i) => i !== index))
    }

    return (
        <section className={styles.container}>
            <div className={styles.headContainer}>
                <div className={styles.div}>
                    <p>Suas tarefas de hoje</p>
                    <a href="./tasks">Ver todas</a>
                </div>
                <p>{tasksQtd == 1 ? '1 tarefa' : tasksQtd == 0 || undefined ? 'Nenhuma tarefa' : `${tasksQtd} tarefas`}</p>
            </div>
            <hr />
            <section className={styles.taskList}>
                {taskData.map((task) => (task.day == (selection)
                    ? <Task
                        key={task.id}
                        {...task}
                        onDelete={() => onDelete(task.id)}
                        day={null}
                    />
                    : null
                ))}
            </section>
        </section>
    )
}