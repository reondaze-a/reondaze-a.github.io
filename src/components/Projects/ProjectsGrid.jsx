import ProjectCard from "./ProjectCard";
import spots_header from "../../assets/spots-project.png";
import wtwr_header from "../../assets/what-to-wear.png";
import church_header from "../../assets/church-demo.png";

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
                title="Fresh Life Church"
                description="A modern church community web app designed to connect members, share sermons, and organize events."
                technologies={["Next.js", "Tailwind", "Vercel", "MongoDB"]}
                image={church_header}
                demoUrl="https://fresh-life-repo.vercel.app/"
                githubUrl="https://github.com/reondaze-a/fresh-life-repo"
            />
        </div>
    );
}
