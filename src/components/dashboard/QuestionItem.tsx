interface QuestionItemProps {
  title: string;
  description: string;
  status: string;
  icon: React.ReactNode; 
}

export const QuestionItem = ({ title, description, status, icon }: QuestionItemProps) => {
  const isPending = status === "Revisão Pendente";

  return (
    <div className="flex items-center justify-between p-4 rounded-lg hover:bg-slate-50 transition-colors border-t border-slate-50 first:border-none">
      <div className="flex items-center gap-4">
        <div className="bg-slate-100 p-3 rounded-md text-slate-400">
          {icon}
        </div>
        
        <div>
          <h3 className="font-semibold text-slate-700">{title}</h3>
          <p className="text-xs text-slate-400">{description}</p>
        </div>
      </div>

      <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase ${
        isPending ? "bg-amber-100 text-amber-600" : "bg-emerald-100 text-emerald-600"
      }`}>
        {status}
      </span>
    </div>
  );
};
