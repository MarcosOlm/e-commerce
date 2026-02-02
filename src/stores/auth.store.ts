import { create } from "zustand";
import { persist } from "zustand/middleware";

interface authState {
  isUserLogin: boolean,
  setIsUserLogin: (verify: boolean) => void,
}

export const useAuth = create<authState>()(
  persist(
    (set) => ({
      isUserLogin: false,
      setIsUserLogin: (verify) => set(() => ({ isUserLogin: verify })),
    }),
    { name: "auth" },
  ),
);
