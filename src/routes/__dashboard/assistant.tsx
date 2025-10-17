import { createFileRoute } from '@tanstack/react-router'
import Assis from '@/components/system/main/Assis.jsx'

export const Route = createFileRoute('/__dashboard/assistant')({
  component: Assistant,
})

function Assistant() {
  document.title = 'Assistente'
  return (
    <Assis />
  )
}