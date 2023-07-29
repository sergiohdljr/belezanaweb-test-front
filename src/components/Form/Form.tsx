export const Form = () => {
  return (
    <form
      action=""
      className="w-full h-full p-3 flex flex-col gap-5 items-center"
    >
      <h2 className="text-lg w-full text-left">Cartão de Crédito</h2>
      <fieldset className="w-full flex flex-col gap-2">
        <label className="text-sm">Número : </label>
        <input
          type="text"
          placeholder="0000 0000 0000 0000"
          className=" w-full h-11 border border-gray-400 flex p-2 rounded text-sm"
        />
      </fieldset>
      <fieldset className="w-full flex flex-col gap-2">
        <label className="text-sm">Nome do titular do Cartão : </label>
        <input
          type="text"
          placeholder="Nome impresso no cartão"
          className=" w-full h-11 border border-gray-400 flex p-2 rounded text-sm"
        />
      </fieldset>
      <fieldset className="w-full flex gap-3">
        <fieldset className="w-1/2 flex flex-col gap-2">
          <label className="text-sm">Data de Validade : </label>
          <input
            type="text"
            placeholder="MM/AA"
            className=" w-full h-11 border border-gray-400 flex p-2 rounded text-sm"
          />
        </fieldset>
        <fieldset className="w-1/2 flex flex-col gap-2">
          <label className="text-sm">Código CVV : </label>
          <input
            type="text"
            placeholder="000"
            className=" w-full h-11 border border-gray-400 flex p-2 rounded text-sm"
          />
        </fieldset>
      </fieldset>
    </form>
  );
};
