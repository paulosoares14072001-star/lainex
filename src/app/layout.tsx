import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lainex Control",
  description: "Sistema de gestão da Lainex Consultoria",
};

const menu = [
  ["Dashboard", "/"],
  ["Alunos", "/alunos"],
  ["Planos", "/planos"],
  ["Financeiro", "/financeiro"],
  ["Treinos", "/treinos"],
  ["Nutrição", "/nutricao"],
  ["Atendimentos", "/atendimentos"],
  ["Equipe", "/equipe"],
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main className="min-h-screen bg-[#031B20] text-white">
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/30 blur-3xl" />
            <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl" />
          </div>

          <div className="relative mx-auto flex min-h-screen max-w-7xl gap-6 p-6">
            <aside className="hidden w-72 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:block">
              <div className="mb-10">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-xl font-black">
                  LX
                </div>

                <h1 className="text-3xl font-black">LAINEX</h1>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
                  Control
                </p>
              </div>

              <nav className="space-y-2 text-sm">
                {menu.map(([item, href]) => (
                  <Link
                    key={item}
                    href={href}
                    className="block rounded-2xl px-4 py-3 text-slate-300 transition hover:bg-gradient-to-r hover:from-cyan-400/25 hover:to-fuchsia-500/25 hover:text-white hover:ring-1 hover:ring-cyan-300/40"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </aside>

            <section className="flex-1">{children}</section>
          </div>
        </main>
      </body>
    </html>
  );
}
