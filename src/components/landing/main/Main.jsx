import appStore from "../../../assets/appStore.png"
import googlePlay from "../../../assets/googlePlay.png"
import tags from "../../../assets/tags.png"
import week from "../../../assets/week.png"
import gemini from "../../../assets/gemini.png"
import { PrimaryBtn } from "../../buttons/Buttons.jsx"
import styles from "../../../styles/landing/main.module.css"

export default function Main() {
    return (
        <main className={styles.main}>
            <section className={styles.heroSection}>
                <div className={styles.heroDiv}>
                    <h1>Organize-se e aumente sua produtividade!</h1>
                    <p>Tenha total controle das suas tarefas</p>
                    <div className={styles.imgDiv}>
                        <img src={appStore} alt="App Store" />
                        <img src={googlePlay} alt="Google Play" />
                    </div>
                </div>
            </section>
                <hr />
            <section className={styles.tagsSection}>
                <div className={styles.infoDiv}>
                    <h2>Adicione #tags para maior controle</h2>
                    <p>Separe suas tarefas com identificadores para maior organização</p>
                    <img src={tags} alt="Tags" className={styles.tagsImg} />
                </div>
            </section>
            <section className={styles.weekSection}>
                <div className={styles.infoDiv}>
                    <h2>Se planeje! Saiba como estará o clima nos próximos dias</h2>
                    <p>Integração com API climática que exibe as condições climáticas dos próximos dias</p>
                    <img src={week} alt="Week" className={styles.weekImg} />
                </div>
            </section>
            <section className={styles.geminiSection}>
                <div className={styles.infoDiv}>
                    <h2>Receba dicas úteis do Gemini</h2>
                    <p>Integração com inteligência artificial que fornece dicas para se organizar e cumprir suas tarefas dos jeito mais eficiente</p>
                    <img src={gemini} alt="Gemini" className={styles.geminiImg} />
                </div>
            </section>
            <section className={styles.downloadSection}>
                <div className={styles.infoDiv}>
                    <h2>Assuma o controle das suas tarefas</h2>
                    <p>Disponível para Android e iOS</p>
                    <PrimaryBtn>Baixar agora</PrimaryBtn>
                </div>
            </section>
        </main>
    )
}