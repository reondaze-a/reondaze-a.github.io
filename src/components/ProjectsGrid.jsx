import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
                title="E-Commerce Platform"
                description="A modern e-commerce platform built with React and Node.js"
                technologies={["React", "Node.js", "MongoDB", "Stripe"]}
                image="/api/placeholder/400/250"
                demoUrl="#"
                githubUrl="#"
            />
            <ProjectCard 
                title="Task Management App"
                description="A collaborative task management application with real-time updates"
                technologies={["React", "Firebase", "Tailwind CSS"]}
                image="/api/placeholder/400/250"
                demoUrl="#"
                githubUrl="#"
            />
            <ProjectCard 
                title="Weather Dashboard"
                description="A beautiful weather dashboard with location-based forecasts"
                technologies={["JavaScript", "API Integration", "CSS3"]}
                image="/api/placeholder/400/250"
                demoUrl="#"
                githubUrl="#"
            />
        </div>
    );
}
