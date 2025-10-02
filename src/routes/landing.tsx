import { createFileRoute } from '@tanstack/react-router'
import Header from "../components/landing/header/Header.jsx"
import Main from "../components/landing/main/Main.jsx"
import Footer from "../components/landing/footer/Footer.jsx"
import styles from "../styles/landing/landing.module.css"

export const Route = createFileRoute('/landing')({
    component: Landing,
})

function Landing() {
    document.title = "Landing Page"
    return (
        <div className={styles.landing}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}