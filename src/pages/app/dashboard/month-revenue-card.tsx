import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthRevenueCard({
  value,
  margin,
}: {
  value: number
  margin: number
}) {
  return (
    <Card className="flex flex-col rounded-md">
      <CardHeader className="flex-row justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold leading-tight">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(value)}
        </h2>
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
