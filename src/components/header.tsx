import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="flex items-center border-b">
      <header className="flex h-16 items-center gap-6 px-6">
        <Pizza size={24} />
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={'/'} className="flex items-center gap-2">
            <Home size={16} />
            Início
          </NavLink>
          <NavLink to={'/orders'} className="flex items-center gap-2">
            <UtensilsCrossed size={16} />
            Pedidos
          </NavLink>
        </nav>
      </header>
      <div className="ml-auto mr-4">
        <ThemeToggle />
      </div>
    </div>
  )
}
