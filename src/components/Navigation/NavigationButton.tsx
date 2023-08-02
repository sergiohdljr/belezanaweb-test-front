import { NavStore } from "../../store";

interface buttonProps {
  title: string;
  active: string;
  IdKey: string;
}

export const NavigationButton = ({ title, active, IdKey }: buttonProps) => {
  const checkActive = active === IdKey ? "border-b-2 border-black" : null;
  const { setActive } = NavStore();

  return (
    <button
      className={`text-gray-400 p-1 ${checkActive} transition-all duration-100 ease-in `}
      onClick={() => setActive(title)}
    >
      {title}
    </button>
  );
};
