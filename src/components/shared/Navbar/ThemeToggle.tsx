import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("vite-ui-theme") as "light" | "dark") || "light"
  );

  // Apply theme to <html> on mount and theme change
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("vite-ui-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("vite-ui-theme", "light");
    }
  }, [theme]);

  return (
    <Toggle
      variant="outline"
      pressed={theme === "dark"}
      onPressedChange={() =>
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
      }
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative size-9 group data-[state=on]:bg-muted/50"
    >
      {/* Moon (dark mode icon) */}
      <MoonIcon
        size={16}
        className="absolute transition-all scale-0 opacity-0 group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
        aria-hidden="true"
      />

      {/* Sun (light mode icon) */}
      <SunIcon
        size={16}
        className="absolute transition-all scale-100 opacity-100 group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
        aria-hidden="true"
      />
    </Toggle>
  );
}
