"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const storageKey = "portfolio-theme";

function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const syncPreference = () => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(storageKey);
    } catch {
      /* Storage may be unavailable. */
    }
    document.documentElement.dataset.theme =
      saved === "light" || saved === "dark"
        ? saved
        : media.matches
          ? "dark"
          : "light";
    onChange();
  };
  window.addEventListener("portfolio-theme-change", onChange);
  window.addEventListener("storage", syncPreference);
  media.addEventListener("change", syncPreference);
  return () => {
    window.removeEventListener("portfolio-theme-change", onChange);
    window.removeEventListener("storage", syncPreference);
    media.removeEventListener("change", syncPreference);
  };
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme === "dark",
    () => false,
  );
  function toggle() {
    const theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      /* Keep the current session preference. */
    }
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Alternar modo escuro"
      aria-pressed={dark}
      title={dark ? "Usar modo claro" : "Usar modo escuro"}
      onClick={toggle}
    >
      <Sun className="theme-sun" size={18} />
      <Moon className="theme-moon" size={18} />
    </button>
  );
}
