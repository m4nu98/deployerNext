import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}) {
  return (
    (<nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}>
      <Link
        href="/admin"
        className="text-sm font-medium transition-colors hover:text-primary">
        Dashboard
      </Link>
      <Link
        href="/admin/members"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Socios
      </Link>
      <Link
        href="/admin/payments"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Pagos
      </Link>
      <Link
        href="/admin/notifications"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Notificaciones
      </Link>
    </nav>)
  );
}

