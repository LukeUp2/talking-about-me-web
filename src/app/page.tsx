import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Monitoramento de Marca</h1>
      <p>Cadastre sua marca e receba alertas automáticos de uso indevido.</p>

      <Link
        href="/dashboard"
        className="mt-4 text-blue-500 underline hover:text-blue-700"
      >
        Começar
      </Link>
    </main>
  );
}
