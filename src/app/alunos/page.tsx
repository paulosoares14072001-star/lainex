const resumo = [
  ["Alunos ativos", "0"],
  ["Teste grátis", "0"],
  ["Atrasados", "0"],
  ["Cancelados", "0"],
];

const alunos = [
  {
    nome: "Exemplo Aluno",
    plano: "Treino + Dieta",
    status: "ATIVO",
    professor: "Professor",
    nutricionista: "Nutricionista",
    vencimento: "30/06/2026",
  },
  {
    nome: "Aluno Teste",
    plano: "7 dias grátis",
    status: "TESTE",
    professor: "Pendente",
    nutricionista: "Pendente",
    vencimento: "20/06/2026",
  },
];

export default function AlunosPage() {
  return (
    <div className="space-y-6">
      <header className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              Gestão de alunos
            </p>
            <h1 className="mt-4 text-4xl font-black">Alunos</h1>
            <p className="mt-3 text-slate-300">
              Controle completo dos alunos da consultoria online.
            </p>
          </div>

          <button className="rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-4 font-bold">
            Novo aluno
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
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold">Lista de alunos</h2>
            <p className="mt-1 text-sm text-slate-400">
              Aqui ficarão todos os alunos cadastrados na Lainex.
            </p>
          </div>

          <input
            placeholder="Buscar aluno..."
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
          />
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/10 text-slate-300">
              <tr>
                <th className="px-4 py-4">Nome</th>
                <th className="px-4 py-4">Plano</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4">Professor</th>
                <th className="px-4 py-4">Nutricionista</th>
                <th className="px-4 py-4">Vencimento</th>
              </tr>
            </thead>

            <tbody>
              {alunos.map((aluno) => (
                <tr key={aluno.nome} className="border-t border-white/10">
                  <td className="px-4 py-4 font-semibold">{aluno.nome}</td>
                  <td className="px-4 py-4 text-slate-300">{aluno.plano}</td>
                  <td className="px-4 py-4">
                    <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs text-cyan-100">
                      {aluno.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-300">{aluno.professor}</td>
                  <td className="px-4 py-4 text-slate-300">
                    {aluno.nutricionista}
                  </td>
                  <td className="px-4 py-4 text-slate-300">
                    {aluno.vencimento}
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
