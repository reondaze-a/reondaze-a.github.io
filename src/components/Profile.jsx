import ProfileDesc from "./ProfileDesc";

export default function Profile() {
    return (
        <section className="profile flex w-full rounded-b-xl shadow-lg h-100">
          <ProfileDesc />
          <div className="flex flex-col items-center justify-center w-full p-4">
            <h1 className="text-2xl font-bold">Profile Picture</h1>
            <p className="text-lg">Etc.</p>
          </div>
        </section>
    );
}