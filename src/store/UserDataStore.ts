import { create } from "zustand";
import { formSchema } from "../components/Form/interfaces";

interface userStoreData {
  userData: formSchema | undefined;
  setUserData: (user: formSchema) => void;
}

export const DataUserStore = create<userStoreData>((set) => ({
  userData: undefined,
  setUserData: (user: formSchema) => set({ userData: user }),
}));
