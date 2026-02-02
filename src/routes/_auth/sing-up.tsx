import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useSingUp } from '@/features/auth/auth.hook';
import type { singUpRequest } from '@/features/auth/authType';
import { createFileRoute, Link } from '@tanstack/react-router'
import { useForm, type SubmitHandler } from 'react-hook-form'

export const Route = createFileRoute('/_auth/sing-up')({
  component: RouteComponent,
})

function RouteComponent() {
  const { register, handleSubmit } = useForm<singUpRequest>();
  const createConsumir = useSingUp();
  const handleCreateConsumir: SubmitHandler<singUpRequest> = (data) => {
    createConsumir.mutate(data)
  }

  return (
    <>
      <div className="w-full">
        <form onSubmit={handleSubmit(handleCreateConsumir)}>
          <FieldSet>
            <FieldLegend className="text-center">Crie sua conta</FieldLegend>
            <FieldDescription className="text-center">Cadastre-se para começar a comprar</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel>Nome:</FieldLabel>
                <Input placeholder="seu nome" {...register('username')} />
              </Field>
              <Field>
                <FieldLabel>Email:</FieldLabel>
                <Input placeholder="seu@email.com" {...register('email')} />
              </Field>
              <Field>
                <FieldLabel>Senha:</FieldLabel>
                <Input placeholder="*******" type='password' {...register('password')}/>
              </Field>
              <Button type='submit'>Cadastrar</Button>
              <Link to="/sing-in" className="text-center hover:underline">Já tem conta?</Link>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
    </>
  );
}
