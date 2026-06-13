export default function Home() {
  return (
    <div>
      <header className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
          Consultoria Online
        </p>
        <h2 className="mt-4 text-5xl font-black">Lainex Control</h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          Painel central para controlar alunos, planos, financeiro, treinos,
          nutrição, atendimentos e equipe.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          ["Alunos ativos", "0"],
          ["Teste grátis", "0"],
          ["Receita prevista", "R$ 0,00"],
          ["Pagamentos pendentes", "R$ 0,00"],
          ["Treinos pendentes", "0"],
          ["Dietas pendentes", "0"],
        ].map(([titulo, valor]) => (
          <div
            key={titulo}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
            <p className="text-sm text-slate-300">{titulo}</p>
            <strong className="mt-2 block text-3xl font-black">{valor}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
