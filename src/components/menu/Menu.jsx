import { useState } from "react";
import { menuData } from "./menu.js";
import styles from "./menu.module.css"

export default function Menu() {
    const [id, setId] = useState(0)

    return (
        <ul className={styles.ul}>
            {menuData.map((item) => (
                <li onClick={() => setId(item.id)} className={`${styles.li} ${id == item.id && styles.selected}`} key={item.id}>
                    <img src={item.img.src} alt={item.img.alt} className={styles.img} />
                    <a href='#' className={styles.a}>{item.a.value}</a>
                </li>
            ))}
        </ul>
    )
}