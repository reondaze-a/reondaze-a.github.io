export default function Modal({
  children,
  title = "Modal Template",
  isOpen,
  onClose,
}) {
  return (
    <div
      className={`${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } fixed inset-0 bg-black/20 z-50 flex items-center justify-center transition duration-300`}
      onClick={onClose}
    >
      <div
        className="max-w-md w-full bg-white rounded-lg shadow-lg flex flex-col items-center p-5 mx-5 animate-appear"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        {children}
      </div>
    </div>
  );
}
