import styles from '../../../styles/system/createTask.module.css'

export default function CreateTask({ modalRef }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.portal} ref={modalRef}>
                <h1>Test</h1>
            </div>
        </div>
    )
}