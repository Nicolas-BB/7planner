import styles from '../../../styles/system/prof.module.css'
import { TaskContext } from '../../../routes/__dashboard/route'
import { useContext } from 'react'

export default function Prof() {
    const { taskData, setTaskData } = useContext(TaskContext)
    const date = new Date()
    const today = date.getDate()
    const profileUrl = 'https://preview.redd.it/anyone-have-the-nerd-dog-in-hq-v0-akkxz5ofa3ob1.jpg?width=1080&crop=smart&auto=webp&s=4274966cc0ac71b1129f4e53ee829e10102ff24c'
    return (
        <main className={styles.main}>
            <div className={styles.profileDiv}>
                <img src={profileUrl} alt="Foto de perfil" className={styles.profileImg} />
                <h2>Nícolas</h2>
            </div>
            <section className={styles.tasksStatus}>
                <div>
                    <h2>Tarefas pendentes</h2>
                    <span>{taskData.filter(task => task.day < today).length}</span>
                </div>
                <div>
                    <h2>Tarefas futuras</h2>
                    <span>{taskData.filter(task => task.day >= today).length}</span>
                </div>
            </section>
        </main>
    )
}