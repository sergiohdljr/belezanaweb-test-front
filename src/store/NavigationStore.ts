import { create } from "zustand";

type Nav = {
  active: string;
  setActive: (title: string) => void;
};

interface initialState {
  initialState: string;
}

const activeState: initialState = {
  initialState: "Sacola",
};

export const NavStore = create<Nav>((set) => ({
  active: activeState.initialState,
  setActive: (novoState: string) => set({ active: novoState }),
}));
