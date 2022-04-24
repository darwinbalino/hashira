import create from "zustand";

const useStore = create((set) => ({
  menu: true,
  toggleMenu: () => set((state) => ({ menu: !state.menu })),
  sidebar: true,
  toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useStore;
