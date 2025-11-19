export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Scratch Movie: Quest for Bugs
          </h1>
          <p class="mt-2">The Scratch Movie: Quest for Bugs is a movie directed by scratchcode1_2_3 and mali3000 that we created since we wanted to have an official Scratch Movie, but, unfortunately, that is not one of the priorities of the Scratch Team. So we created this!</p>
        </div>
      </main>
    </div>
  );
}
