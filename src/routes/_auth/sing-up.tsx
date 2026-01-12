import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sing-up')({
  component: RouteComponent,
})

function RouteComponent() {
  

  return (
    <>
      <div className="w-full">
        <form>
          <FieldSet>
            <FieldLegend className="text-center">Crie sua conta</FieldLegend>
            <FieldDescription className="text-center">Cadastre-se para começar a comprar</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel>Nome:</FieldLabel>
                <Input placeholder="seu nome"/>
              </Field>
              <Field>
                <FieldLabel>Email:</FieldLabel>
                <Input placeholder="seu@email.com"/>
              </Field>
              <Field>
                <FieldLabel>Senha:</FieldLabel>
                <Input placeholder="*******"/>
              </Field>
              <Field>
                <FieldLabel>Confirmar Senha:</FieldLabel>
                <Input placeholder="*******"/>
              </Field>
              <Button>Entrar</Button>
              <Link to="/sing-in" className="text-center hover:underline">Já tem conta?</Link>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
    </>
  );
}
