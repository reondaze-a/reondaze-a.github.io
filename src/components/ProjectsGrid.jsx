import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
    return (
        <section className="grid grid-cols-2 px-20 gap-2">
            <ProjectCard />
            <ProjectCard />
        </section>
    );
}