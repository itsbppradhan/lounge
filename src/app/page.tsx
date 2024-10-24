import { CanvasShaderGradient } from "@/components/dynamicBackground";
import Hero from "./components/hero";
import { PlaceholdersAndVanishInputDemo } from "./components/emailField";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <CanvasShaderGradient />
      </div>
      <div className="overflow-hidden grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-9 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero /> 
        <PlaceholdersAndVanishInputDemo/>
        </main>
          <footer>
        </footer>
      </div>
    </>
  );
}
