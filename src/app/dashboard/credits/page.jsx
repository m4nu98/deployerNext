import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CreditsPage() {
  return (
    (<div className="flex min-h-screen flex-col space-y-6">
      <DashboardHeader />
      <DashboardShell>
        <Card>
          <CardHeader>
            <CardTitle>Historial de Créditos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="grid gap-1">
                  <p className="text-sm font-medium">Compra de créditos</p>
                  <p className="text-sm text-muted-foreground">15/12/2023</p>
                </div>
                <p className="text-sm font-medium text-green-600">+10 créditos</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="grid gap-1">
                  <p className="text-sm font-medium">Reserva de clase</p>
                  <p className="text-sm text-muted-foreground">14/12/2023</p>
                </div>
                <p className="text-sm font-medium text-red-600">-1 crédito</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="grid gap-1">
                  <p className="text-sm font-medium">Compra de créditos</p>
                  <p className="text-sm text-muted-foreground">10/12/2023</p>
                </div>
                <p className="text-sm font-medium text-green-600">+20 créditos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </DashboardShell>
    </div>)
  );
}

