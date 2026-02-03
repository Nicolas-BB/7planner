import { createFileRoute } from '@tanstack/react-router'
import Main from "@components/system/main/Main.jsx"

export const Route = createFileRoute('/__dashboard/')({
  component: Index,
})

function Index() {
  document.title = "7Planner"
  return (
    <Main />
  )
}