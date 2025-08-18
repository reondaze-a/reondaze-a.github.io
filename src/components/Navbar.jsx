export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="logo">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
            Abraham Efraim
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
            Contact Me
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
