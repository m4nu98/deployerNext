import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

export default function BookingsPage() {
  return (
    (<div className="flex min-h-screen flex-col space-y-6">
      <DashboardHeader />
      <DashboardShell>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Calendario de Reservas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Calendar mode="single" className="rounded-md border" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Horarios Disponibles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">09:00 - 10:30</p>
                    <p className="text-sm text-muted-foreground">8/12 personas</p>
                  </div>
                  <div className="grid gap-2">
                    <p className="text-sm font-medium">Personas registradas:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div>1. Ana García</div>
                      <div>2. Carlos Martínez</div>
                      <div>3. María Pérez</div>
                      <div>4. Juan López</div>
                      <div>5. Laura Torres</div>
                      <div>6. Diego Sánchez</div>
                      <div>7. Sofia Luna</div>
                      <div>8. Pablo Ruiz</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">11:00 - 12:30</p>
                    <p className="text-sm text-muted-foreground">5/12 personas</p>
                  </div>
                  <div className="grid gap-2">
                    <p className="text-sm font-medium">Personas registradas:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div>1. Luis Rodríguez</div>
                      <div>2. Pedro Silva</div>
                      <div>3. Carmen Díaz</div>
                      <div>4. Elena Morales</div>
                      <div>5. Roberto Vega</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardShell>
    </div>)
  );
}

