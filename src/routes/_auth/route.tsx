import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <Card className="w-xl shadow-2xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2">
            <h1 className="text-3xl">Next<span className="text-amber-700">Buy</span></h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Outlet />
        </CardContent>
      </Card>
      </div>
    </>
  );
}
