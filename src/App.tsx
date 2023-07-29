import { Bag, Product } from "./components";
import { Form } from "./components/Form/Form";
import { LayoutApp } from "./Layouts";

export const App = () => {
  return (
    <LayoutApp>
      <Bag>
        <Form />
      </Bag>
      <section className="w-full h-64 bg-white"></section>
    </LayoutApp>
  );
};
