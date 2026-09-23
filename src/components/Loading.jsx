const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24">

      <div className="relative h-14 w-14">

        <div className="absolute inset-0 animate-spin rounded-full border-4 border-slate-800 border-t-blue-500 border-r-purple-500" />

        <div className="absolute inset-3 rounded-full bg-slate-950" />

      </div>

      <p className="mt-5 text-sm text-slate-400">
        Analyzing GitHub profile...
      </p>

    </div>
  );
};

export default Loading;