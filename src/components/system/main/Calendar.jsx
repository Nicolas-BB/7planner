import { useEffect, useState } from "react"
import styles from "../../../styles/system/calendar.module.css" // CSS Module

export default function Calendar() {
    const [days, setDays] = useState([])
    const [monthYear, setMonthYear] = useState("")

    useEffect(() => {
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth()
        const today = date.getDate()

        const monthNames = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ]

        setMonthYear(`${monthNames[month]} ${year}`)

        const firstDay = new Date(year, month, 1).getDay()
        const lastDate = new Date(year, month + 1, 0).getDate()

        const tempDays = []

        // Espaços vazios antes do 1º dia
        for (let i = 0; i < firstDay; i++) tempDays.push("")

        // Dias do mês
        for (let i = 1; i <= lastDate; i++) tempDays.push(i)

        setDays(tempDays)
    }, [])

    const today = new Date().getDate()

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h2>{monthYear}</h2>
                <div className={styles.grid}>
                    {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((d, i) => (
                        <div key={i} className={styles.weekday}>{d}</div>
                    ))}
                    {days.map((day, i) => (
                        <div key={i} className={`${styles.day} ${day === today ? styles.today : ""}`}>
                            {day}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}