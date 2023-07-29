import { Bag, Product } from "./components";
import { LayoutApp } from "./Layouts";

export const App = () => {
  return (
    <LayoutApp>
      <Bag>
        <Product />
        <Product />
        <Product />
      </Bag>
      <section className="w-full h-64 bg-white"></section>
    </LayoutApp>
  );
};
