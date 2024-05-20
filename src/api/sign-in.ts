import { api } from '@/lib/axios'

interface BodyParams {
  email: string
}

const url = '/authenticate'

export async function signIn({ email }: BodyParams) {
  await api.post(url, {
    email,
  })
}
