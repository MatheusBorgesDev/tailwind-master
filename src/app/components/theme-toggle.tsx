"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

import { Button } from "./button";

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    const theme = document.documentElement.classList;

    if (theme.contains("dark")) {
      theme.remove("dark");
    } else {
      theme.add("dark");
    }

    setDarkMode(!darkMode);
  }

  return (
    <Button
      variant="outline"
      className="flex items-center justify-between gap-1"
      onClick={() => {
        toggleTheme();
      }}
    >
      Theme:
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}
