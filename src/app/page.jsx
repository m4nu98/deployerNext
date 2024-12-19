import LoginForm from "@/components/login-form"

export default function Home() {
  return (
    (<main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">
            Bienvenido a GymPro
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Ingresa a tu cuenta para continuar
          </p>
        </div>
        <LoginForm />
      </div>
    </main>)
  );
}

