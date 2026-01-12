import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sing-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/sing-in"!</div>
}
