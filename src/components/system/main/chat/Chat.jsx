import { useState } from 'react'
import { generateTip } from '../../../../api/gemini.js'
import styles from '../../../../styles/system/chat.module.css'
import Markdown from 'react-markdown'

export default function Chat() {
    const [chat, setChat] = useState({ user: '', model: '' })

    async function getTip(message) {
        try {
            const modelMsg = await generateTip(message)
            setChat(chat => ({ ...chat, model: modelMsg }))
        }
        catch {
            setChat(chat => ({ ...chat, model: 'Ocorreu um erro' }))
        }
    }

    function submit(formData) {
        const message = formData.get('message')

        if (message.trim().length > 0) {
            setChat(chat => ({ user: message.trim(), model: '' }))
            getTip(message)
        }
    }

    return (
        <div className={styles.div}>
            <div className={styles.messages}>
                {
                    chat.user.length > 0 &&
                    <div className={styles.userDiv}>
                        <span>Você</span>
                        <span className={styles.userMsg}>
                            {chat.user}
                        </span>
                    </div>
                }
                {
                    chat.model.length > 0 &&
                    <div className={styles.modelDiv}>
                        <span>Assistente</span>
                        <span className={styles.modelMsg}>
                            <Markdown>{chat.model}</Markdown>
                        </span>
                    </div>
                }
            </div>
            <form className={styles.form} action={submit}>
                <input type="text" name="message" id="message" placeholder="Pergunte ao assistente..." autoComplete='off' />
            </form>
        </div>
    )
}

/*
function submit(formData) {
    const newIngredient = formData.get("ingredient")

    if (newIngredient.trim().length > 0) {
        setIngredients(ingredients => [...ingredients, newIngredient.trim()])
        inputRef.current.focus()
    }
}
*/