export default function Navbar() {
  return (
    <nav className="bg-blue-500 max-h-10 w-full flex items-center justify-between px-4 py-2 rounded-b-md">
      <div className="flex justify-between gap-4">
        <a href="/" className="text-white text-lg font-bold">Projects</a>
        <a href="/about" className="text-white text-lg font-bold">About</a>
        <a href="/contact" className="text-white text-lg font-bold">Contact</a>
      </div>
    </nav>
  );
}