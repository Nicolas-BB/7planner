import { PrimaryBtn } from '../../buttons/Buttons.jsx'
import { tasksData } from '../main/tasks/tasksData.js'
import styles from '../../../styles/system/createTask.module.css'
import { useState } from 'react'

export default function CreateTask({ modalRef }) {
    const [validName, setValidName] = useState(true)

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

        tasksData.push(newTask)

        console.log(`\n${name}\n${time}`)
        console.log(tasksData)
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
                    <label htmlFor="hour">
                        Horário
                        <input type="time" name="time" id="time" autoComplete='off' />
                    </label>
                    <label htmlFor="hour">
                        Dia
                        <input type="number" name="day" id="day" min={1} max={7} placeholder='1-7' autoComplete='off' />
                    </label>
                    <PrimaryBtn>Criar</PrimaryBtn>
                </form>
            </div>
        </div>
    )
}