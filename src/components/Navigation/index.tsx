import { useState } from "react";
import { NavigationButton } from "./NavigationButton";

export const Navigation = () => {
  const [Active, setActive] = useState("Sacola");

  const activeButton = (value: string) => {
    setActive(value);
  };

  const navLinks = ["Sacola", "Pagamento", "Confirmação"];
  return (
    <header className="bg-white w-full h-16 flex  justify-center shadow  ">
      <nav className="w-fit flex gap-3 items-stretch border-black">
        {navLinks.map((title, index) => (
          <NavigationButton
            title={title}
            active={Active}
            key={index}
            IdKey={title}
            onClick={activeButton}
          />
        ))}
      </nav>
    </header>
  );
};
