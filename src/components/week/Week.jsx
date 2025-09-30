import notifIcon from "../../assets/notifIcon.png"
import configIcon from "../../assets/configIcon.png"
import Day from "./Day.jsx"
import styles from "./week.module.css"
import { dayData } from "./dayData.js"

export default function Week() {
    return (
        <div className={styles.container}>
            <div className={styles.div}>
                <h2>SETEMBRO</h2>
                <div className={styles.btnDiv}>
                    <img src={notifIcon} alt="Ícone de sino" />
                    <img src={configIcon} alt="Ícone de engrenagem" />
                </div>
            </div>
            <div className={styles.dayDiv}>
                {dayData.map((data, i) => (
                    <Day
                        key={i}
                        {...data}
                    />
                ))}
            </div>
        </div>
    )
}