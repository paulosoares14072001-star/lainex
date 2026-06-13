const resumo = [
  ["Planos ativos", "3"],
  ["Planos com treino", "3"],
  ["Planos com nutrição", "2"],
  ["Ticket médio", "R$ 197,00"],
];

const planos = [
  {
    nome: "Teste grátis",
    valor: "R$ 0,00",
    duracao: "7 dias",
    treino: "Sim",
    nutricao: "Não",
    status: "ATIVO",
  },
  {
    nome: "Treino Online",
    valor: "R$ 149,90",
    duracao: "30 dias",
    treino: "Sim",
    nutricao: "Não",
    status: "ATIVO",
  },
  {
    nome: "Treino + Dieta",
    valor: "R$ 249,90",
    duracao: "30 dias",
    treino: "Sim",
    nutricao: "Sim",
    status: "ATIVO",
  },
];

export default function PlanosPage() {
  return (
    <div className="space-y-6">
      <header className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              Gestão de planos
            </p>
            <h1 className="mt-4 text-4xl font-black">Planos</h1>
            <p className="mt-3 text-slate-300">
              Controle dos planos vendidos na consultoria online.
            </p>
          </div>

          <button className="rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-4 font-bold">
            Novo plano
          </button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {resumo.map(([titulo, valor]) => (
          <div
            key={titulo}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
            <p className="text-sm text-slate-300">{titulo}</p>
            <strong className="mt-2 block text-3xl font-black">{valor}</strong>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Lista de planos</h2>
          <p className="mt-1 text-sm text-slate-400">
            Aqui ficarão todos os planos cadastrados na Lainex.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/10 text-slate-300">
              <tr>
                <th className="px-4 py-4">Nome</th>
                <th className="px-4 py-4">Valor</th>
                <th className="px-4 py-4">Duração</th>
                <th className="px-4 py-4">Treino</th>
                <th className="px-4 py-4">Nutrição</th>
                <th className="px-4 py-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {planos.map((plano) => (
                <tr key={plano.nome} className="border-t border-white/10">
                  <td className="px-4 py-4 font-semibold">{plano.nome}</td>
                  <td className="px-4 py-4 text-slate-300">{plano.valor}</td>
                  <td className="px-4 py-4 text-slate-300">{plano.duracao}</td>
                  <td className="px-4 py-4 text-slate-300">{plano.treino}</td>
                  <td className="px-4 py-4 text-slate-300">{plano.nutricao}</td>
                  <td className="px-4 py-4">
                    <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs text-cyan-100">
                      {plano.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
