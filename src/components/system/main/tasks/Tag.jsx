import styles from "../../../../styles/system/tag.module.css"

export default function Tag(props) {
    return (
        <>
            <div className={styles.tagsContainer}>
                <div className={styles.div} key={props.i} >
                    <span className={styles.icon}>{props.icon}</span>
                    <span className={styles.text}>{props.text}</span>
                </div>
            </div>
        </>
    )
}