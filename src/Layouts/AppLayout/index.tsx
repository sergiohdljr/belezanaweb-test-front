import { ReactNode } from "react";
import { Navigation } from "../../components";

interface ContainerProps {
  children: ReactNode[];
}

export const LayoutApp = ({ children }: ContainerProps) => {
  return (
    <main className="w-full h-screen bg-gray-100 flex flex-col justify-between items-center gap-5">
      <Navigation />
      {children}
    </main>
  );
};
