import { createFileRoute } from '@tanstack/react-router'
import Calendar from '@components/system/main/Calendar.jsx'

export const Route = createFileRoute('/__dashboard/calendar')({
  component: Cal,
})

function Cal() {
  document.title = 'Calendário'
  return (
    <Calendar />
  )
}
