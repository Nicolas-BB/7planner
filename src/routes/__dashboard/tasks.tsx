import { createFileRoute } from '@tanstack/react-router'
import Tasks from '@components/system/main/Tasks.jsx'

export const Route = createFileRoute('/__dashboard/tasks')({
  component: AllTasks,
})

function AllTasks() {
  document.title = 'Tarefas'
  return (
    <Tasks />
  )
}
