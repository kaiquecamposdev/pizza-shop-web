import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <label htmlFor="name" className="text-sm font-semibold">
        Filtros:{' '}
      </label>
      <Input
        id="idOrder"
        type="text"
        placeholder="ID do Pedido"
        className="h-8 w-auto"
      />
      <Input
        id="name"
        type="text"
        placeholder="Nome do cliente"
        className="h-8 w-full max-w-[340px]"
      />
      <Select>
        <SelectTrigger className="h-8 w-full max-w-[100px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent defaultValue={'all'}>
          <SelectItem value="all">Todos</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>
      <Button
        type="submit"
        variant="secondary"
        size="xs"
        className="flex items-center gap-2"
      >
        <Search size={16} />
        Filtrar resultados
      </Button>
      <Button
        type="button"
        variant="outline"
        size="xs"
        className="flex items-center gap-2 text-red-600 dark:text-red-500"
      >
        <X size={16} className="text-red-600 dark:text-red-500" />
        Remover filtros
      </Button>
    </form>
  )
}
