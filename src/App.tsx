import { Bag, Navigation } from "./components";

export const App = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex flex-col justify-between items-center gap-5">
      <Navigation />
      <Bag />
      <section className="w-full h-60 bg-white"></section>
    </main>
  );
};
