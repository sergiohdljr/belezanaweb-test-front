import { ReactNode } from "react";
import { NavStore } from "../../store";

interface ContainerProps {
  children: ReactNode[] | ReactNode;
}

export const Bag = ({ children }: ContainerProps) => {
  const { active } = NavStore();

  return (
    <section className="w-95 h-96 pt-3 bg-white rounded border border-gray-300 flex flex-col justify-center items-center gap-6">
      {active === "Confirmação" ? <h2 className="self-start pl-3">Produtos</h2> : null}
      {children}
    </section>
  );
};
