import { Outlet, createFileRoute } from '@tanstack/react-router'
import Nav from "@components/system/nav/Nav.jsx"
import { createContext, useState, useEffect } from 'react'
import styles from '@styles/system/index.module.css'
export const Route = createFileRoute('/__dashboard')({
  component: RouteComponent,
})

export const TaskContext = createContext({})

function RouteComponent() {
  const [taskData, setTaskData] = useState(() => {
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskData))
  }, [taskData])


  return (
    <div className={styles.index}>
      <TaskContext.Provider value={{ taskData, setTaskData }}>
        <Nav />
        <Outlet />
      </TaskContext.Provider>
    </div>
  )
}