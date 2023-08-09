import { object, string } from "zod";
import { formartData, formatCartNumber, formatName } from "../../utils";

export const schema = object({
  numero: string()
    .nonempty({ message: "Número do cartão é obrigatorio" })
    .min(16, { message: "O número é composto por 16 números" })
    .max(19, { message: "O número é composto por 16 números" })
    .transform((cartão) => formatCartNumber(cartão)),
  nomeTitular: string()
    .nonempty({
      message: "nome do titular do cartão é obrigatoria",
    })
    .transform((nome) => formatName(nome)),
  dataValidade: string()
    .nonempty({
      message: "data de validade é obrigatoria",
    })
    .transform((data) => formartData(data)),
  codigoCVV: string()
    .nonempty({
      message: "codigo CVV do cartão é obrigatorio",
    })
    .min(3, { message: "O codigo é composto por 3 números" })
    .max(3, { message: "O codigo é composto por 3 números" }),
});

export type formSchema = Zod.infer<typeof schema>;
