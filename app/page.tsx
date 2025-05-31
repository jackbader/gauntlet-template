import ThemeSwitch from "@/app/components/theme-switch";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <div className="flex flex-col items-center justify-center">
        Hello World
        <ThemeSwitch />

        <div className="h-10 w-10 bg-red-500 dark:bg-blue-500"></div>
      </div>
    </div>
  );
}
