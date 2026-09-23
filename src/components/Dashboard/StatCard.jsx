const StatCard = ({
  title,
  value,
  icon: Icon,
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      
      <div className="flex items-center justify-between">
        
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h3>
        </div>

        {Icon && (
          <div className="rounded-xl bg-blue-500/10 p-3">
            <Icon className="text-blue-400" />
          </div>
        )}

      </div>

    </div>
  );
};

export default StatCard;