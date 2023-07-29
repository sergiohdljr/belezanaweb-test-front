export const Navigation = () => {
  return (
    <header className="bg-white w-full h-16 flex justify-center shadow  ">
      <nav className="w-fit flex gap-3 items-stretch border-black">
        <button className="text-gray-400 p-1 border-b-2 border-black">
          Sacola
        </button>
        <button className="text-gray-400 p-1">Pagamento</button>
        <button className="text-gray-400 p-1">Confirmação</button>
      </nav>
    </header>
  );
};
