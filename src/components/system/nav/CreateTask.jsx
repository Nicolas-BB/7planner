import { PrimaryBtn } from '../../buttons/Buttons.jsx'
import { tasksData } from '../main/tasks/tasksData.js'
import styles from '../../../styles/system/createTask.module.css'
import { useState } from 'react'
import { TaskContext } from '../../../routes/__dashboard/route.tsx'
import { useContext } from 'react'

export default function CreateTask({ modalRef }) {
    const [validName, setValidName] = useState(true)
    const { taskData, setTaskData } = useContext(TaskContext)
    const date = new Date()
    const today = date.getDate()
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

    function submit(formData) {
        const name = formData.get('name')
        const time = formData.get('time')
        const day = parseInt(formData.get('day'))

        if (name.length == 0) {
            return (
                setValidName(false)
            )
        }

        const newTask = { title: name, hour: time, day: day }

        setTaskData((taskData) => [...taskData, newTask])
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.portal} ref={modalRef}>
                <h2>Nova task</h2>
                <form action={submit}>
                    <label htmlFor="name">
                        Nome
                        <input type="text" name="name" id="name" placeholder='Estudar' autoComplete='off' />
                        {validName ? null : <span className={styles.validName}>Insira um nome válido!</span>}
                    </label>
                    <label htmlFor="time">
                        Horário
                        <input type="time" name="time" id="time" autoComplete='off' />
                    </label>
                    <label htmlFor="day">
                        Dia
                        <input type="number" name="day" id="day" min={today} max={lastDay} placeholder={`${today}-${lastDay}`} autoComplete='off' />
                    </label>
                    <PrimaryBtn>Criar</PrimaryBtn>
                </form>
            </div>
        </div>
    )
}