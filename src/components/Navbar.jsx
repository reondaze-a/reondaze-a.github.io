export default function Navbar() {
  return (
    <nav className="bg-blue-500 max-h-10">
      <div className="flex justify-between gap-4">
        <a href="/" className="text-white text-lg font-bold">Projects</a>
        <a href="/about" className="text-white text-lg font-bold">About</a>
        <a href="/contact" className="text-white text-lg font-bold">Contact</a>
      </div>
    </nav>
  );
}