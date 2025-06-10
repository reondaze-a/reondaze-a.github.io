export default function Navbar() {
  return (
    <nav className="bg-black max-h-30 w-full flex items-center justify-between px-4 py-2">
      <div className="flex justify-between gap-4 w-full">
        <div className="logo text-white text-2xl font-bold">
          <a href="/">Ace</a>
        </div>
        <div className="links flex items-center gap-4">
          <a href="/" className="text-white text-lg font-bold">Projects</a>
          <a href="/about" className="text-white text-lg font-bold">About</a>
          <a href="/contact" className="text-white text-lg font-bold">Contact me</a>
        </div>
      </div>
    </nav>
  );
}