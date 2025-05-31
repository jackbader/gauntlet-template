'use client';

import { Button } from "@/components/ui/button";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme();
    return (
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <FaSun className="w-4 h-4 scale-100 dark:scale-0" />
            <FaMoon className="w-4 h-4 scale-0 dark:scale-100" />
        </Button>
    )
}