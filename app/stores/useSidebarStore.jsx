import {create} from 'zustand';

const useSidebarStore = create((set) => ({
    sidebarToggle: false,
    toggleSidebar: () => set((state) => ({ sidebarToggle: !state.sidebarToggle })),
    closeSidebar: () => set({ sidebarToggle: false }),
}));

export default useSidebarStore;
