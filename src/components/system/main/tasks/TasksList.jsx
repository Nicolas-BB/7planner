import styles from "../../../../styles/system/tasksList.module.css"
import Tag from "./Tag.jsx"
import Task from "./Task.jsx"
import { tasksData } from "./tasksData.js"
import { tagsData } from "./tagsData.js"
import plusIcon from "../../../../assets/plusIcon.png"

export default function TasksList({ selection }) {
    return (
        <div className={styles.container}>
            <div className={styles.headContainer}>
                <div className={styles.div}>
                    <p>Suas tarefas de hoje</p>
                    <a href="#">Ver todas</a>
                </div>
                <p>X tarefas</p>
            </div>
            <hr />
            <div className={styles.tagsDiv}>
                {tagsData.map((tag, i) => (
                    <Tag
                        key={i}
                        {...tag}
                    />
                ))}
                <img src={plusIcon} alt="Ícone de adição" className={styles.img} />
            </div>
            {tasksData[selection]?.map((task, i) => (
                <Task
                    key={i}
                    {...task}
                />
            ))}
        </div>
    )
}