export function DashboardShell({
  children,
  className,
  ...props
}) {
  return (
    (<div className="container grid gap-12 md:gap-8">
      {children}
    </div>)
  );
}

