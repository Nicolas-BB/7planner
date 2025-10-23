import styles from "../../../../styles/system/tasksList.module.css"
import Tag from "./Tag.jsx"
import Task from "./Task.jsx"
import { TaskContext } from "../../../../routes/__dashboard/route.tsx"
import { tagsData } from "./tagsData.js"
import plusIcon from "../../../../assets/plusIcon.png"
import { useContext } from "react"

export default function TasksList({ selection }) {
    const { taskData } = useContext(TaskContext)
    console.log(taskData)
    const tasksQtd = taskData.filter(task => task.day == selection).length

    return (
        <div className={styles.container}>
            <div className={styles.headContainer}>
                <div className={styles.div}>
                    <p>Suas tarefas de hoje</p>
                    <a href="#">Ver todas</a>
                </div>
                <p>{tasksQtd == 1 ? '1 tarefa' : tasksQtd == 0 || undefined ? 'Nenhuma tarefa' : `${tasksQtd} tarefas`}</p>
            </div>
            <hr />
            {/*
            <div className={styles.tagsDiv}>
                {tagsData.map((tag, i) => (
                    <Tag
                        key={i}
                        {...tag}
                    />
                ))}
                <img src={plusIcon} alt="Ícone de adição" className={styles.img} />
            </div>
            */}
            {taskData.map((task, i) => (task.day == (selection)
                ? <Task
                    key={i}
                    {...task}
                />
                : null
            ))}
        </div>
    )
}