import { tagsData } from "./tagsData.js"
import styles from "./tags.module.css"
import plusIcon from "../../assets/plusIcon.png"

export default function Tags() {
    return (
        <>
            <div className={styles.tagsContainer}>
                {tagsData.map((item, i) => (
                    <div className={styles.div} key={i} >
                        <span className={styles.icon}>{item.icon}</span>
                        <span className={styles.text}>{item.text}</span>
                    </div>
                ))}
            </div>
            <img src={plusIcon} alt="Ícone de adição" className={styles.img} />
        </>
    )
}