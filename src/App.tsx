import { Bag, PaymentDetails } from "./components";
import { Form } from "./components/Form/Form";
import { LayoutApp } from "./Layouts";

export const App = () => {
  return (
    <LayoutApp>
      <Bag>
        <Form />
      </Bag>
      <PaymentDetails />
    </LayoutApp>
  );
};
