import Link from "next/link"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    (<div
      className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:px-0">
      <div className="lg:p-8">
        <div
          className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crear una cuenta
            </h1>
            <p className="text-sm text-muted-foreground">
              Ingresa tus datos para registrarte
            </p>
          </div>
          <RegisterForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/" className="underline underline-offset-4 hover:text-primary">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>)
  );
}

