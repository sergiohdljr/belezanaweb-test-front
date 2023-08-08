import { Bag, PaymentDetails, Products } from "./components";
import { Form } from "./components/Form/Form";
import { UseGetProduct } from "./Hooks/getProductData";
import { LayoutApp } from "./Layouts";
import { NavStore } from "./store";

export const App = () => {
  const { active } = NavStore();
  const { data } = UseGetProduct();

  const Items = data?.items.map(({ product }) => product);

  const ActiveNav =
    active === "Sacola" ? (
      <Products produtos={Items!} />
    ) : active === "Pagamento" ? (
      <Form />
    ) : null;

  return (
    <LayoutApp>
      <Bag>{ActiveNav}</Bag>
      <PaymentDetails />
    </LayoutApp>
  );
};
