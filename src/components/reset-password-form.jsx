'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  email: z.string().email({
    message: "Por favor ingresa un email válido.",
  }),
})

export function ResetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values) {
    setIsLoading(true)

    try {
      // Aquí iría la lógica de recuperación de contraseña
      console.log(values)
      
      // Simular delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      (<div className="flex flex-col items-center justify-center space-y-4">
        <div className="text-center">
          <h2 className="text-lg font-medium">Revisa tu email</h2>
          <p className="text-sm text-muted-foreground">
            Te hemos enviado instrucciones para recuperar tu contraseña.
          </p>
        </div>
        <Button asChild className="w-full">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>)
    );
  }

  return (
    (<div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="nombre@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar instrucciones"}
          </Button>
        </form>
      </Form>
      <Button variant="outline" asChild>
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>)
  );
}

