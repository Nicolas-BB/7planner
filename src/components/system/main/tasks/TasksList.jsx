import styles from "../../../../styles/system/tasksList.module.css"
import Tag from "./Tag.jsx"
import Task from "./Task.jsx"
import { tasksData } from "./tasksData.js"
import { tagsData } from "./tagsData.js"
import plusIcon from "../../../../assets/plusIcon.png"

export default function TasksList({ selection }) {
    const tasksQtd = tasksData[selection]?.length == 1 ? '1 tarefa' : tasksData[selection]?.length == (0 || undefined) ? 'Nenhuma tarefa' : `${tasksData[selection]?.length} tarefas`

    return (
        <div className={styles.container}>
            <div className={styles.headContainer}>
                <div className={styles.div}>
                    <p>Suas tarefas de hoje</p>
                    <a href="#">Ver todas</a>
                </div>
                <p>{tasksQtd}</p>
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
            {tasksData.map((task, i) => (task.day == (selection + 1) ?
                <Task
                    key={i}
                    {...task}
                />
                : null
            ))}
        </div>
    )
}