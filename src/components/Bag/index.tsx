import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode[];
}

export const Bag = ({ children }: ContainerProps) => {
  return (
    <section className="w-11/12 h-96 pt-3 bg-white rounded border border-gray-300 flex flex-col justify-center items-center gap-6">
      {children}
    </section>
  );
};
