export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required,
  placeholder,
  autoComplete,
  rows = 4
}) {

  const baseStyle = [
    "w-full rounded-lg px-3 py-2 outline-none",
    "bg-white  placeholder:text-zinc-500",
    "focus:ring-1 focus:ring-blue-500",
    error ? "border border-red-500" : "border border-zinc-700",
  ].join(" ")

  return (
    <label className="block">
      <span className="mb-1 block text-sm text-black">
        {label}
      </span>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder || label}
          className={baseStyle}
          rows={rows}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder || label}
          className={baseStyle}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </label>
  );
}