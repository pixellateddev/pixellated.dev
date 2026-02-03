import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/')({
  head: () => ({
    meta: [{ title: 'projects | pixellated.dev' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projects/"!</div>
}
