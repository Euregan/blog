import { create } from "zustand";

type BackgroundState = {
  background: string | null;
  setBackground: (background: string | null) => void;
};

export const useBackgroundStore = create<BackgroundState>()((set) => ({
  background: null,
  setBackground: (background) => set({ background }),
}));
