import { Bag, PaymentDetails, Products } from "./components";
import { Form } from "./components/Form/Form";
import { UserInfo } from "./components/UserInfo";
import { UseGetProduct } from "./Hooks/getProductData";
import { LayoutApp } from "./Layouts";
import { NavStore } from "./store";
import { DataUserStore } from "./store/UserDataStore";

export const App = () => {
  const { active } = NavStore();
  const { data } = UseGetProduct();
  const { userData } = DataUserStore();

  const Items = data?.items.map(({ product }) => product);

  const pricesTotals = data && {
    qtdProdutos: Items?.length,
    subTotal: data.subTotal,
    shippingTotal: data.shippingTotal,
    discount: data.discount,
    total: data.total,
  };

  const ActiveNav =
    active === "Sacola" ? (
      <Products produtos={Items!} />
    ) : active === "Pagamento" ? (
      <Form />
    ) : (
      <Products produtos={Items!} />
    );

  return (
    <LayoutApp>
      {active === "Confirmação" ? <UserInfo user={userData!} /> : null}
      <Bag>{ActiveNav}</Bag>
      <PaymentDetails
        discount={pricesTotals?.discount}
        qntProducts={pricesTotals?.qtdProdutos}
        subTotal={pricesTotals?.subTotal}
        total={pricesTotals?.total}
        shippingTotal={pricesTotals?.shippingTotal}
      />
    </LayoutApp>
  );
};
