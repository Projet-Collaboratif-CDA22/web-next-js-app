import { create } from "zustand";
//Basic increment store for example
const useCourseStore = create((set) => ({
  course: 0,
  increasePopulation: () =>
    set((state: { course: number }) => ({ course: state.course + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
