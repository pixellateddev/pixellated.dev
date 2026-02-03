import { createFileRoute } from '@tanstack/react-router'
import { About } from '@/pages'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [{ title: 'about | pixellated.dev' }],
  }),
  component: About,
})
