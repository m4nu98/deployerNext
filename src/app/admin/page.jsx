import { DashboardHeader } from "../../components/header"
import { DashboardShell } from "../../components/shell"
import { Overview } from "../../components/overview"
import { RecentMembers } from "../../components/recent-members"
import { BranchSelector } from "../../components/branch-selector"

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col space-y-6 w-full max-w-4xl">
        <DashboardHeader />
        <DashboardShell>
          <div className="grid gap-6">
            <BranchSelector />
            <Overview />
            <RecentMembers />
          </div>
        </DashboardShell>
      </div>
    </div>
  );
}