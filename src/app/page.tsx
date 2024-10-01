import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import HeroSection from "@/sections/home/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen
        p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol
          className="list-inside list-decimal text-sm text-center sm:text-left
            font-[family-name:var(--font-geist-mono)]"
        >
          <div>
            <h1>Rewardwale version 2.0</h1>
            <HeroSection/>
            <ThemeColorToggle />
            <ThemeModeToggle />
          </div>
        </ol>
      </main>
    </div>
  );
}
