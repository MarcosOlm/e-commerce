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
        <Card>
        <CardHeader>
          <CardTitle className="text-center">
            Next<span className="primary">Buy</span>
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
