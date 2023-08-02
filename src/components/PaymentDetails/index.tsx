import { NavStore } from "../../store";
import { ButtonClick, SubmitButton } from "..";

export const PaymentDetails = () => {
  const { active } = NavStore();
  const ButtonType = active === "Sacola" ? <ButtonClick /> : <SubmitButton />;
  return (
    <section className="w-full h-64  bg-white p-7 flex flex-col gap-4">
      <div className="w-full flex justify-between">
        <span>Produtos:(3 items)</span>
        <span>R$ 624,80</span>
      </div>
      <div className="w-full  flex justify-between">
        <span>Frete: </span>
        <span>R$ 5,00</span>
      </div>
      <div className="w-full flex justify-between">
        <span>Desconto: </span>
        <span className="font-semibold text-purple-700">R$ 30.00</span>
      </div>
      <div className="w-full flex justify-between">
        <h2 className="text-xl font-semibold ">Subtotal: </h2>
        <h2 className="text-xl font-semibold ">R$ 600,00</h2>
      </div>
      {ButtonType}
    </section>
  );
};
