import { useQuery } from '@tanstack/react-query'
import { Building, ChevronDown, LogOut } from 'lucide-react'

import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { getProfile } from '@/api/get-profile'

import { StoreProfileDialog } from './store-profile-dialog'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Skeleton } from './ui/skeleton'

export function AccountMenu() {
  const { data: profile, isLoading: isLoadingGetProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })
  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
    useQuery({
      queryKey: ['managedRestaurant'],
      queryFn: getManagedRestaurant,
    })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex select-none items-center gap-2"
          >
            {isLoadingManagedRestaurant ? (
              <Skeleton className="h-4 w-40" />
            ) : (
              managedRestaurant?.name
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="flex flex-col">
            {isLoadingGetProfile ? (
              <>
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </>
            ) : (
              <>
                <span>{profile?.name}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {profile?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem className="flex gap-1">
              <Building className="h-4 w-4" />
              <span>Perfil da Loja</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem className="flex gap-1 text-rose-500 dark:text-rose-400">
            <LogOut className="h-4 w-4" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <StoreProfileDialog />
    </Dialog>
  )
}
