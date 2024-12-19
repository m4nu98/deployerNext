import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { CurrentBooking } from "@/components/dashboard/current-booking"
import { TrainingPlan } from "@/components/dashboard/training-plan"
import { PersonalRoutine } from "@/components/dashboard/personal-routine"

export default function DashboardPage() {
  return (
    (<div className="flex min-h-screen flex-col space-y-6">
      <DashboardHeader />
      <DashboardShell>
        <div className="grid gap-6">
          <CurrentBooking />
          <div className="grid gap-6 md:grid-cols-2">
            <TrainingPlan />
            <PersonalRoutine />
          </div>
        </div>
      </DashboardShell>
    </div>)
  );
}

