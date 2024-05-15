import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: ldasjd12je109d1j1</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell className="flex items-center justify-end gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-400" />
              <span>Pendente</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Cliente</TableCell>
            <TableCell className="flex justify-end">
              Kaique de Campos Monteiro
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Telefone</TableCell>
            <TableCell className="flex justify-end">(13) 99999-9999</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">E-mail</TableCell>
            <TableCell className="flex justify-end">
              kaiquedecampos2@gmail.com
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">
              Realizado há
            </TableCell>
            <TableCell className="flex justify-end">há 3 minutos</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead>Qtd.</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Subtotal</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>RTX 3080</TableCell>
            <TableCell className="text-right">1</TableCell>
            <TableCell className="text-right">R$ 3.000,00</TableCell>
            <TableCell className="text-right">R$ 3.000,00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>RTX 3080</TableCell>
            <TableCell className="text-right">1</TableCell>
            <TableCell className="text-right">R$ 3.000,00</TableCell>
            <TableCell className="text-right">R$ 3.000,00</TableCell>
          </TableRow>
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total do pedido</TableCell>
            <TableCell className="text-right font-medium">
              R$ 6.000,00
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </DialogContent>
  )
}
