import NotifIcon from "../../assets/notifIcon.png"
import configIcon from "../../assets/configIcon.png"
import Day from "./Day.jsx"
import styles from "./week.module.css"
import { dayData } from "./dayData"

export default function Week({ selectedDay, setSelectedDay }) {


    return (
        <>
            <div className={styles.container}>
                <div className={styles.div}>
                    <h2>SETEMBRO</h2>
                    <div className={styles.btnDiv}>
                        <img src={NotifIcon} alt="Ícone de sino" />
                        <img src={configIcon} alt="Ícone de engrenagem" />
                    </div>
                </div>
                <div className={styles.dayDiv}>
                    {
                        dayData.map(({ dayWeek, dayNum, dayWeather, id }) => {
                            <Day
                                dayWeek={dayWeek}
                                dayNum={dayNum}
                                dayWeather={dayWeather}
                                id={id}
                                selectedDay={selectedDay}
                                setId={setSelectedDay}
                            />
                        })
                    }
                </div>
            </div>
        </>
    )
}