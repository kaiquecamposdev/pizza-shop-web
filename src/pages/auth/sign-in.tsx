import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import * as z from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const SignInFormSchema = z.object({
  email: z.string().email(),
})

type SignInFormType = z.infer<typeof SignInFormSchema>

export function SignIn() {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormType>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInFormType) {
    await authenticate({
      email: data.email,
    })

    toast.success('Enviamos um link autenticação no seu e-mail.', {
      action: {
        label: 'Reenviar e-mail',
        onClick: () => {
          handleSignIn(data)
        },
      },
    })
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Fazer Cadastro</Link>
        </Button>
        <div className="flex w-full max-w-[350px] flex-col justify-center gap-4">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-center text-2xl font-bold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-center text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel de atendimento!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              type="submit"
              className="w-full bg-primary"
            >
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
