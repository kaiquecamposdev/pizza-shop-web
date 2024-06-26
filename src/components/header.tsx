import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ToggleTheme } from './theme/toggle-theme'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <header className="flex items-center border-b ">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={'/'} className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to={'/orders'} className="flex items-center gap-2">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>
      </div>
      <div className="ml-auto mr-4 flex gap-2">
        <ToggleTheme />
        <AccountMenu />
      </div>
    </header>
  )
}
