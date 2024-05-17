import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

interface PaginationProps {
  pageIndex: number
  perPage: number
  totalCount: number
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <p className="text-xs text-muted-foreground">
        Total de {totalCount} items(s)
      </p>
      <div className="flex items-center gap-4">
        <p className="text-xs font-medium">
          Página {pageIndex + 1} de {pages}
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="xs">
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="xs">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="xs">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="xs">
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
