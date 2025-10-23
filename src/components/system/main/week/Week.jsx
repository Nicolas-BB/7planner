import notifIcon from "../../../../assets/notifIcon.png"
import configIcon from "../../../../assets/configIcon.png"
import Day from "./Day.jsx"
import styles from "../../../../styles/system/week.module.css"

export default function Week({ selection, setSelection }) {

    // Gera os dias da semana
    const date = new Date()
    const currentDay = date.getDay()
    const currentDate = date.getDate()
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]

    const daysData = Array.from({ length: 7 }, (_, i) => {
        const day = new Date(date)
        day.setDate(currentDate - currentDay + i)

        return {
            dayWeek: weekDays[i],
            dayNum: day.getDate(),
            dayWeather: "🌞"
        }
    })

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
                {daysData.map((data, i) => (
                    <Day
                        key={i}
                        {...data}
                        click={() => setSelection(data.dayNum)}
                        selected={data.dayNum === selection}
                    />
                ))}
            </div>
        </div>
    )
}