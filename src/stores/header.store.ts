import { create } from 'zustand'

interface searchState {
    isSearch: boolean,
    toggleSearch: () => void,
}

export const useIsSearch = create<searchState>((set) => ({
    isSearch: false,
    toggleSearch: () => set((state) => ({isSearch: !state.isSearch})),
})) 