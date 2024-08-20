import { ContactUs } from "@/components/ContactUs";
import GradientText from "@/components/GradientText";
import ModeToggle from "@/components/mode-toggle";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <div className="relative flex min-h-screen flex-col flex-wrap items-center justify-center p-8 py-12 md:px-16">
        <div className="before:bg-gradient-radial after:bg-gradient-conic absolute left-[40%] top-[40%] z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-blue-300 before:to-transparent before:opacity-70 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[480px] after:w-full after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:opacity-40 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-50 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
        <h1 className="relative z-20 bg-clip-text py-8 text-4xl font-bold text-black dark:text-white sm:text-7xl">
          Scrape
          <GradientText text="Pro" />
        </h1>
        <ModeToggle />
      </div>
      <div className="p-8 py-0 md:px-16">
        <Services />
      </div>
      <div>
        <Testimonials />
      </div>
      <div className="p-8 py-0 md:px-16 md:pr-0">
        <ContactUs />
      </div>
    </main>
  );
}
