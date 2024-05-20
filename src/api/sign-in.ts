import { api } from '@/lib/axios'

interface SignInBody {
  email: string
}

const url = '/authenticate'

export async function signIn({ email }: SignInBody) {
  await api.post(url, {
    email,
  })
}
