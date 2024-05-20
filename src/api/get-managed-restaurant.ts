import { api } from '@/lib/axios'

interface GetManagedRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

const url = '/managed-restaurant'

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>(url)

  return response.data
}
