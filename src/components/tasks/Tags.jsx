import tagsData from "./tagsData.js"
import styles from "./tags.module.css"

export default function Tags() {
    return (
        <>
            {tagsData.map((item) => (
                <div className={styles.div}>
                    <span className={styles.icon}>{item.icon.value}</span>
                    <span className={styles.text}>{item.text.value}</span>
                </div>
            ))}
        </>
    )
}