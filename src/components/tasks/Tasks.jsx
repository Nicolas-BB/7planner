import styles from "./tasks.module.css"
import Tags from "./Tags.jsx"
import TaskList from "./TaskList.jsx"

export default function Tasks({ selectedDay, setSelectedDay }) {

    // Filter
    [3, 2, 2, 2,5,5,6,6] 
    // retone apenas os => 2

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
                <Tags />
            </div>
            {/* <div className={styles.tasksDiv}> */}
            <TaskList />
            {/* </div> */}
        </div>
    )
}