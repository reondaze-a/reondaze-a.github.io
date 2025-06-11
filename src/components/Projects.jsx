import ProjectsGrid from "./ProjectsGrid"

export default function Projects() {
    return (
        <section className="flex flex-col w-full rounded-3xl shadow-2xl h-[500px]">
            <div className="w-full py-10 px-10">
                <h2 className="text-2xl font-bold mb">My Projects</h2>
            </div>
            <ProjectsGrid />
        </section>
    )
}