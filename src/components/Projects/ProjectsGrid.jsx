import ProjectCard from "./ProjectCard";
import spots_header from "../../assets/spots-project.png";
import wtwr_header from "../../assets/what-to-wear.png";

export default function ProjectsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
                title="Spots Gallery"
                description="A picture gallery web app for sharing and discovering beautiful spots"
                technologies={["HTML", "CSS", "JavaScript"]}
                image={spots_header}
                demoUrl="https://reondaze-a.github.io/spots_project/"
                githubUrl="https://github.com/reondaze-a/spots_project"
            />
            <ProjectCard 
                title="What-to-Wear"
                description="A MERN-Stack weather-based clothing recommendation app"
                technologies={["MongoDB", "Express.js", "React.js", "Node.js", "OpenWeather API", "GCP"]}
                image={wtwr_header}
                demoUrl="https://whattowear.strangled.net/"
                githubUrl="https://github.com/reondaze-a/se_project_react"
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
