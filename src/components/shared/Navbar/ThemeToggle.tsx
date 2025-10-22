import { Toggle } from "@/components/ui/toggle";
import { toggleTheme } from "@/redux/features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);

  return (
    <Toggle
      variant="outline"
      pressed={theme === "dark"}
      onPressedChange={() => dispatch(toggleTheme())}
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
