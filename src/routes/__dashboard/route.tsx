import { Outlet, createFileRoute } from '@tanstack/react-router'
import Nav from "@components/system/nav/Nav.jsx"
import styles from '@styles/system/index.module.css'
export const Route = createFileRoute('/__dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className={styles.index}>
    <Nav />
    <Outlet />
  </div>
}
