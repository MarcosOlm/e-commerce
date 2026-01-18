import * as React from 'react'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import { z } from 'zod'

const searchShema = z.object({
  query: z.string().optional(),
  category: z.string().optional(),
  brand: z.string().optional(),
  price: z.coerce.number().optional(),
  isSearch: z.boolean().optional(),
})

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  validateSearch: (search) => z.parse(searchShema, search),
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
          <Outlet />
    </React.Fragment>
  )
}
