import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useSingIn } from "@/features/auth/auth.hook";
import type { singInRequest } from "@/features/auth/authType";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm, type SubmitHandler } from "react-hook-form";


export const Route = createFileRoute("/_auth/sing-in")({
  component: RouteComponent,
});

function RouteComponent() {
  const { register, handleSubmit } = useForm<singInRequest>();
  const loginConsumir = useSingIn();
  const handleLoginConsumir: SubmitHandler<singInRequest> = (data) => {
    loginConsumir.mutate(data)
  }

  return (
    <>
      <div className="w-full">
        <form onSubmit={handleSubmit(handleLoginConsumir)}>
          <FieldSet>
            <FieldLegend className="text-center">Bem-vindo de volta!</FieldLegend>
            <FieldDescription className="text-center">Entre para acessar sua conta</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel>Email:</FieldLabel>
                <Input placeholder="seu@email.com" {...register('email')} />
              </Field>
              <Field>
                <FieldLabel>Senha:</FieldLabel>
                <Input placeholder="*******" {...register('password')}/>
              </Field>
              <Button type='submit'>Entrar</Button>
              <Link to="/sing-up" className="text-center hover:underline">Não tem conta?</Link>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
    </>
  );
}
