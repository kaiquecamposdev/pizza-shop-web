import { api } from '@/lib/axios'

interface RegisterRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

const url = '/restaurants'

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  await api.post(url, {
    restaurantName,
    managerName,
    email,
    phone,
  })
}
