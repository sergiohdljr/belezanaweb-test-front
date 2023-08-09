import { maskCreditCard } from "../../utils";
import { formSchema } from "../Form/interfaces";

interface userInfoProps {
  user: formSchema;
}

export const UserInfo = ({ user }: userInfoProps) => {
  const { nomeTitular, numero, dataValidade } = user;
  return (
    <section className="w-95 h-auto py-5 bg-white rounded border border-gray-300 flex flex-col justify-center items-center gap-6">
      <h3 className="text-2xl">Compra efetuada com Sucesso</h3>
      <p className="text-gray-600">{maskCreditCard(numero)}</p>
      <p className="text-gray-600">{nomeTitular}</p>
      <p className="text-gray-600">{dataValidade}</p>
    </section>
  );
};
