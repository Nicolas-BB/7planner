import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__dashboard/assistant')({
  component: Assistant,
})

function Assistant() {
  return <div>Hello "/__dashboard/assistant"!</div>
}
