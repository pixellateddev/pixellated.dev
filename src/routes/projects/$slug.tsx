import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$slug')({
  head: ({ params }) => ({
    meta: [{ title: `${params.slug} | pixellated.dev` }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams()
  return (
    <section>
      <h2>{slug}</h2>
      <p>case study coming soon.</p>
    </section>
  )
}
