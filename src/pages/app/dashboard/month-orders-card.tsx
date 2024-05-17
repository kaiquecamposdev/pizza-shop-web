import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function MonthOrdersCard({
  value,
  margin,
}: {
  value: number
  margin: number
}) {
  return (
    <Card className="flex flex-col gap-2 rounded-md shadow-lg">
      <CardHeader className="flex-row justify-between space-y-0 pb-2">
        <h1 className="text-lg font-semibold leading-tight">Pedidos (mês)</h1>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">{value}</h2>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">
            +{margin}%
          </span>{' '}
          em relação ao mês anterior.{' '}
        </p>
      </CardContent>
    </Card>
  )
}
