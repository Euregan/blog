import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Language = "en" | "fr";

type LanguageState = {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (text: Record<Language, string>) => string;
};

export const useLanguage = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: "en",
      setLanguage: (language) => set({ language }),
      translate: (text) => text[get().language],
    }),
    {
      name: "language-storage",
    }
  )
);
