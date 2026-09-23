import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 p-4">

      <AlertCircle
        size={20}
        className="shrink-0 text-red-400"
      />

      <p className="text-sm text-red-300">
        {message}
      </p>

    </div>
  );
};

export default ErrorMessage;