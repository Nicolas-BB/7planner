import { createFileRoute } from '@tanstack/react-router'
import Prof from '@components/system/main/Prof.jsx'

export const Route = createFileRoute('/__dashboard/profile')({
  component: Profile,
})

function Profile() {
  document.title = 'Perfil'
  return (
    <Prof />
  )
}
