import styles from "../../../../styles/system/task.module.css"

export default function Task(props) {
    return (
        <div className={styles.taskDiv} key={props.i}>
            <p className={styles.title}>{props.title}</p>
            <span className={styles.hour}>{props.hour}</span>
        </div>
    )
}