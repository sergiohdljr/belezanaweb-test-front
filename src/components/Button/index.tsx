import { NavStore } from "../../store";

export const ButtonClick = () => {
  const { setActive } = NavStore();

  return (
    <button
      type="button"
      className=" bg-purple-700 p-3 text-white text-lg font-semibold rounded hover:opacity-70 transition-all duration-100 ease-in"
      onClick={() => setActive("Pagamento")}
    >
      Seguir para o pagamento
    </button>
  );
};
