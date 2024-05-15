import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell className="flex items-center justify-center">
        <Button variant="outline" size="xs">
          <Search size={12} />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">1</TableCell>
      <TableCell className="text-muted-foreground">10min</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell>Carlos</TableCell>
      <TableCell>R$ 200,00</TableCell>
      <TableCell>
        <Button variant="outline" size="xs" className="flex items-center gap-2">
          <ArrowRight size={12} />
          <span>Aprovar</span>
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs" className="flex items-center gap-2">
          <X size={12} />
          <span>Cancelar</span>
        </Button>
      </TableCell>
    </TableRow>
  )
}
