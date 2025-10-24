import styles from "../../../../styles/system/task.module.css"

export default function Task(props) {
    return (
        <article className={styles.taskContainer}>
            <input type="checkbox" name="checkbox" id={`checkbox${props.i}`} onChange={props.onDelete} />
            <div className={styles.taskDiv} key={props.i}>
                <p className={styles.title}>{props.title}</p>
                <span className={styles.hour}>{props.hour}</span>
            </div>
            <hr />
            <span className={styles.day}>{props.day}</span>
        </article>
    )
}