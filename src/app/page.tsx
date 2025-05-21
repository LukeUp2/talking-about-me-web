import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-gray-800 font-sans">
      <header className="flex justify-between items-center px-8 py-6 shadow-sm sticky top-0 bg-white z-10">
        <div className="flex items-center space-x-2">
          <Logo />
          <span className="text-xl font-bold">BrandWatch</span>
        </div>
        <Link
          href="pages/auth"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Começar
        </Link>
      </header>

      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-5xl font-bold max-w-2xl mb-6">
          Descubra onde sua marca está sendo usada na internet
        </h1>
        <p className="text-gray-700 max-w-xl mb-8">
          Monitoramos automaticamente o uso do seu nome, logotipo e frases
          registradas em sites, produtos e marketplaces.
        </p>
        <Link
          href="pages/auth"
          className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all"
        >
          Comece agora gratuitamente
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 bg-white">
        <div className="shadow-md p-6 rounded-lg border transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-400">
          <h3 className="text-lg font-semibold mb-2">🔍 Busca Automática</h3>
          <p className="text-gray-600">
            Varrimento regular de sites populares e marketplaces para
            identificar sua marca.
          </p>
        </div>
        <div className="shadow-md p-6 rounded-lg border transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-400">
          <h3 className="text-lg font-semibold mb-2">📊 Painel Interativo</h3>
          <p className="text-gray-600">
            Visualize resultados em tempo real com histórico de ocorrências e
            origem.
          </p>
        </div>
        <div className="shadow-md p-6 rounded-lg border transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-400">
          <h3 className="text-lg font-semibold mb-2">📩 Alerta por E-mail</h3>
          <p className="text-gray-600">
            Receba notificações sempre que sua marca for encontrada em novos
            locais.
          </p>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 p-6">
        &copy; {new Date().getFullYear()} BrandWatch. Todos os direitos
        reservados.
      </footer>
    </main>
  );
}

function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#2563eb"
        strokeWidth="2"
        fill="#e0f2fe"
      />
      <path
        d="M8 12l2 2l4-4"
        stroke="#2563eb"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
