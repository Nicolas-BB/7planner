import Nav from "../components/system/nav/Nav.jsx"
import Main from "../components/system/main/Main.jsx"
import { createFileRoute } from '@tanstack/react-router'
import styles from '../styles/system/index.module.css'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  document.title = "7Planner"
  return (
    <div className={styles.index}>
      <Nav />
      <Main />
    </div>
  )
}