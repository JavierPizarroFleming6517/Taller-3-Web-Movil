import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8 text-center border border-gray-200">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">DataMobile</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Bienvenido al sistema de gestión de inventario.
        </p>
        
        {/* Este componente Link es la forma correcta de navegar en Next.js */}
        <Link href="/dashboard">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md">
            Ir al Dashboard →
          </button>
        </Link>
      </div>
      
    </main>
  );
}