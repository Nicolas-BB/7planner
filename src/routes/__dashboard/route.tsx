import { Outlet, createFileRoute } from '@tanstack/react-router'
import Nav from "@components/system/nav/Nav.jsx"
import { createContext, useState } from 'react'
import styles from '@styles/system/index.module.css'
export const Route = createFileRoute('/__dashboard')({
  component: RouteComponent,
})

export const TaskContext = createContext({})

function RouteComponent() {
  const [taskData, setTaskData] = useState([])

  return (
    <div className={styles.index}>
      <TaskContext.Provider value={{ taskData, setTaskData }}>
        <Nav />
        <Outlet />
      </TaskContext.Provider>
    </div>
  )
}