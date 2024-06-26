import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell className="flex items-center justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
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
          <ArrowRight className="h-3 w-3" />
          <span>Aprovar</span>
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs" className="flex items-center gap-2">
          <X className="h-3 w-3" />
          <span>Cancelar</span>
        </Button>
      </TableCell>
    </TableRow>
  )
}
