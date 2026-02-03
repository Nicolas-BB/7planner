import { useState } from "react";
import { menuData } from "./menuData.js";
import styles from "../../../styles/system/menu.module.css"
import { useRouterState } from "@tanstack/react-router";

export default function Menu() {
    const [id, setId] = useState(0)
    const { location } = useRouterState()
    
    return (
        <ul className={styles.ul}>
            {menuData.map((item) => (
                <li onClick={() => setId(item.id)} className={`${styles.li} ${item.a.href == location.pathname && styles.selected}`} key={item.id}>
                    <a href={item.a.href} className={styles.a}>
                        <img src={item.img.src} alt={item.img.alt} className={styles.img} />
                        {item.a.value}
                    </a>
                </li>
            ))}
        </ul>
    )
}