export default function ProjectCard({ title, description, technologies, image, demoUrl, githubUrl }) {
    return (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
            {/* Project Image */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 h-48">
                {image ? (
                    <img 
                        src={image} 
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <p className="text-gray-500 text-sm">Project Preview</p>
                        </div>
                    </div>
                )}
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-4">
                        <a 
                            href={demoUrl} 
                            className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
                        >
                            Live Demo
                        </a>
                        <a 
                            href={githubUrl} 
                            className="bg-gray-900 text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {title || "Project Title"}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    {description || "Project description goes here. This is a brief overview of what the project does and its key features."}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {(technologies || ["React", "JavaScript", "CSS"]).map((tech, index) => (
                        <span 
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
