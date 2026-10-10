import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/features/theme/store/theme.store";
import en from "@/locales/en.json";
import { Moon, Sun } from "lucide-react";

const themeText = en.layout.theme;

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const label =
    theme === "dark" ? themeText.switchToLight : themeText.switchToDark;

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="size-10 rounded-xl text-foreground"
      aria-label={label}
      aria-pressed={theme === "dark"}
      title={label}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun aria-hidden="true" />
      ) : (
        <Moon aria-hidden="true" />
      )}
    </Button>
  );
}
