import styles from "./tasksList.module.css"
import Tag from "./Tag.jsx"
import Task from "./Task.jsx"
import { tasksData } from "./tasksData"
import { tagsData } from "./tagsData.js"
import plusIcon from "../../assets/plusIcon.png"

export default function TasksList() {
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
                {tagsData.map((data, i) => (
                    <Tag
                        key={i}
                        {...data}
                    />
                    ))}
                    <img src={plusIcon} alt="Ícone de adição" className={styles.img} />
            </div>
            {tasksData.map((data, i) => (
                <Task
                    key={i}
                    {...data}
                />
            ))}
        </div>
    )
}