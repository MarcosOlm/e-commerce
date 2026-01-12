import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createFileRoute, Link } from "@tanstack/react-router";


export const Route = createFileRoute("/_auth/sing-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="w-full">
        <form>
          <FieldSet>
            <FieldLegend className="text-center">Bem-vindo de volta!</FieldLegend>
            <FieldDescription className="text-center">Entre para acessar sua conta</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel>Email:</FieldLabel>
                <Input placeholder="seu@email.com"/>
              </Field>
              <Field>
                <FieldLabel>Senha:</FieldLabel>
                <Input placeholder="*******"/>
              </Field>
              <Button>Entrar</Button>
              <Link to="/sing-up" className="text-center hover:underline">Não tem conta?</Link>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
    </>
  );
}
