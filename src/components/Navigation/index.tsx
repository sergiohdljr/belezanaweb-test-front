import { NavigationButton } from "./NavigationButton";
import { NavStore } from "../../store";

export const Navigation = () => {
  const { active, setActive } = NavStore();

  const navLinks = ["Sacola", "Pagamento", "Confirmação"];
  return (
    <header className="bg-white w-full h-16 flex  justify-center shadow  ">
      <nav className="w-fit flex gap-3 items-stretch border-black">
        {navLinks.map((title, index) => (
          <NavigationButton
            title={title}
            active={active}
            key={index}
            IdKey={title}
          />
        ))}
      </nav>
    </header>
  );
};
