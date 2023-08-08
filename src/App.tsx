import { Bag, PaymentDetails, Product } from "./components";
import { Form } from "./components/Form/Form";
import { UseGetProduct } from "./Hooks/getProductData";
import { LayoutApp } from "./Layouts";
import { NavStore } from "./store";

export const App = () => {
  const { active } = NavStore();
  const { data } = UseGetProduct();

  const arrTemp = [1, 2, 3];

  const Produtos = arrTemp.map((produto) => <Product />);

  const ActiveNav =
    active === "Sacola" ? Produtos : active === "Pagamento" ? <Form /> : null;

  return (
    <LayoutApp>
      <Bag>{ActiveNav}</Bag>
      <PaymentDetails />
    </LayoutApp>
  );
};
