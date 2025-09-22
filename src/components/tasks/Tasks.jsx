import styles from "./tasks.module.css"
import Tags from "./Tags.jsx"

export default function Tasks() {
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
            <div>
                <Tags />
            </div>
        </div>
    )
}