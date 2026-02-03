import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/notes/')({
  head: () => ({
    meta: [{ title: 'notes | pixellated.dev' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/notes/"!</div>
}
