import { motion } from "framer-motion";

export default function FormWrapper({
  title,
  onSubmit,
  children,
  error,
  disabled,
  submitLabel = "Submit",
}) {
  return (
    <div className="animate-appear w-full">
      {title && <h1 className="mb-4 text-3xl font-bold">{title}</h1>}

      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {children}

        {/* General error */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-medium text-red-500"
            aria-live="polite"
          >
            {error}
          </motion.p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={disabled}
          className={[
            "inline-block w-full rounded-lg px-4 py-2 font-semibold transition active:scale-[0.98] cursor-pointer",
            disabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white text-black hover:bg-zinc-200",
          ].join(" ")}
        >
          {submitLabel}
        </button>
      </form>
    </div>
  );
}