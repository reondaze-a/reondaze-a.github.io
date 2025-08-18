import ProjectsGrid from "./ProjectsGrid"

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and passion for creating amazing web experiences.
                </p>
            </div>
            <ProjectsGrid />
        </section>
    )
}
