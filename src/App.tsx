import { QuestionItem } from "./components/dashboard/QuestionItem";
// SVG'S FORAM PEGOS COM LUCIDE
// Exemplo de BD

const RECENT_QUESTIONS = [
  {
    id: 1,
    title: "Algoritmo de Ordenação Customizado",
    description: "Criar lógica sem usar métodos embutidos (.sort)",
    status: "Revisão Pendente",
    type: "code"
  },
  {
    id: 2,
    title: "Menu Interativo com Laço While",
    description: "Estruturas condicionais e validação de input",
    status: "Publicado",
    type: "list"
  }
];


export function App() {
  return (
<div className="p-8 space-y-8 bg-[#f8fafc] min-h-screen">
  {/* Header */}
  <div className="w-full bg-white p-6 rounded-xl shadow-sm border border-slate-100">
    <div className="flex justify-between items-center">
      
      {/* Lado Esquerdo: Textos */}
      <div>
        <h1 className="text-2xl font-bold text-blue-700 tracking-tight">
          Painel da Disciplina
        </h1>
        <p className="text-sm text-slate-400 font-medium mt-1">
          Módulo Atual: <span className="text-slate-500">Estruturas de Repetição e Funções</span>
        </p>
      </div>

      {/* Lado Direito: Botão */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md shadow-blue-200 active:scale-95">
        Publicar Novo Exercício
      </button>
      
    </div>
  </div>
  {/* Top Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  {/* Card Alunos */}
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
    <div className="flex justify-between items-start mb-4">
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Alunos Ativos</span>
      <div className="bg-blue-50 p-2 rounded-lg">
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      </div>
    </div>
    <div className="text-4xl font-bold text-slate-800">42</div>
    <div className="text-xs text-green-500 mt-2 font-medium">↑ 12% desde o último mês</div>
  </div>

  {/* Card Exercícios */}
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
    <div className="flex justify-between items-start mb-4">
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Exercícios Resolvidos</span>
      <div className="bg-emerald-50 p-2 rounded-lg">
        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
    </div>
    <div className="text-4xl font-bold text-slate-800">1.284</div>
    <div className="text-xs text-emerald-600 mt-2 font-medium">Adequação: 94%</div>
  </div>

  {/* Card Dúvidas */}
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
    <div className="flex justify-between items-start mb-4">
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Dúvidas Pendentes</span>
    </div>
    <div className="text-4xl font-bold text-slate-800">3</div>
    <div className="text-xs text-slate-500 mt-2">Maior dificuldade: <span className="font-bold text-slate-700 underline decoration-slate-200">Funções com *args e **kwargs</span></div>
  </div>
</div>

  {/* Recent Questions Section */}
  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
  <h2 className="text-lg font-bold text-slate-800 mb-6">Banco de Questões Recentes</h2>
  <div className="space-y-4">
    {/* Item 1 */}
    <QuestionItem 
  title="Algoritmo de Ordenação Customizado"
  description="Criar lógica sem usar métodos embutidos (.sort)"
  status="Revisão Pendente"
  icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>} 
/>

    {/* Item 2 */}
    <QuestionItem 
  title="Menu Interativo com Laço While"
  description="Estruturas condicionais e validação de input"
  status="Publicado"
  icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>}
/>
  </div>
</div>
</div>
  )
}

export default App
