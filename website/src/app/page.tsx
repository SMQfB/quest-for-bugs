import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className="h-screen items-center justify-center font-sans dark:bg-black">
      <Navbar />
      <main className="h-screen w-screen max-w-3xl items-center  py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Scratch Movie: Quest for Bugs
          </h1>
          <p className="mt-2">The Scratch Movie: Quest for Bugs is a movie directed by scratchcode1_2_3 and mali3000 that we created since we wanted to have an official Scratch Movie, but, unfortunately, that is not one of the priorities of the Scratch Team. So we created this!</p>
        </div>
      </main>
    </div>
  );
}