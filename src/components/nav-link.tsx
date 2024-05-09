import React from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

const NavLink = React.forwardRef<React.ElementRef<typeof Link>, LinkProps>(
  ({ className, ...props }, ref) => {
    const { pathname } = useLocation()

    console.log(pathname)

    return (
      <Link
        className={cn(
          'group flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground ',
          pathname === props.to ? 'text-foreground' : 'text-muted-foreground',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

NavLink.displayName = 'NavLink'

export { NavLink }
