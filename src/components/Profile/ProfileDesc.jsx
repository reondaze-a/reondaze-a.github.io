import { useModal } from "../../contexts/ModalContext";

export default function ProfileDesc() {
  const { setActiveModal } = useModal();

  return (
    <div className="space-y-8 animate-appear pl-3">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-blue-600 font-semibold text-lg tracking-wide">Hello, I'm</p>
          <h1 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Abraham Efraim, a
            <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fullstack Developer
            </span>
          </h1>
        </div>
        
        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
          I create beautiful, responsive web applications with modern technologies. 
          Passionate about clean code, user experience, and bringing ideas to life through code.
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 pt-4">
          <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">React</span>
          <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Next.js</span>
          <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Tailwind</span>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Node.js</span>
          <span className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">MongoDB</span>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 pt-6 px-6 sm:px-0">
        <a href="#projects" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
          View My Work
        </a>
        <button 
          className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 hover:cursor-pointer transition-all duration-300 text-center"
          onClick={() => setActiveModal("contact")}
        > 
          Get In Touch
        </button>
      </div>
    </div>
  );
}
