import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div>
        <h1 className="text-3xl font-bold">Pedidos</h1>
      </div>
      <div className="flex flex-col gap-4">
        <form className="flex items-center gap-2">
          <label htmlFor="name">Filtros: </label>
          <Input
            id="name"
            type="text"
            placeholder="Nome do cliente"
            className="h-8 w-full max-w-[340px] placeholder:text-muted-foreground"
          />
        </form>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado Há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell className="flex items-center justify-center">
                      <Button variant="outline" size="xs">
                        <Search size={12} />
                        <span className="sr-only">Detalhes do pedido</span>
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      1
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      10min
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-400" />
                        <span className="font-medium text-muted-foreground">
                          Pendente
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>Carlos</TableCell>
                    <TableCell>R$ 200,00</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="xs"
                        className="flex items-center gap-2"
                      >
                        <ArrowRight size={12} />
                        <span>Aprovar</span>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="xs"
                        className="flex items-center gap-2"
                      >
                        <X size={12} />
                        <span>Cancelar</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
