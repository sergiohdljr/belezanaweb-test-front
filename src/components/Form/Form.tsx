import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string } from "zod";
import { formartData, formatCartNumber, formatName } from "../../utils";

export const Form = () => {
  const schema = object({
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

  type formSchema = Zod.infer<typeof schema>;

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<formSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<formSchema> = (data) => {
    console.log(data);
    reset({
      codigoCVV: "",
      dataValidade: "",
      nomeTitular: "",
      numero: "",
    });
  };

  return (
    <form
      id="cardForm"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full p-3 flex flex-col gap-3 items-center"
    >
      <h2 className="text-lg w-full text-left">Cartão de Crédito</h2>
      <fieldset className="w-full flex flex-col gap-2">
        <label className="text-sm">Número : </label>
        <input
          type="text"
          placeholder="0000 0000 0000 0000"
          className={`w-full h-11 border ${
            errors?.numero ? "border-red-600" : "border-gray-400"
          }  flex p-2 rounded text-sm`}
          {...register("numero")}
        />
        {errors.numero && (
          <span className="text-xs text-red-600">{errors.numero?.message}</span>
        )}
      </fieldset>
      <fieldset className="w-full flex flex-col gap-2">
        <label className="text-sm">Nome do titular do Cartão : </label>
        <input
          type="text"
          placeholder="Nome impresso no cartão"
          className={`w-full h-11 border ${
            errors?.nomeTitular ? "border-red-600" : "border-gray-400"
          }  flex p-2 rounded text-sm`}
          {...register("nomeTitular")}
        />
        {errors.nomeTitular && (
          <span className="text-xs text-red-600">
            {errors.nomeTitular?.message}
          </span>
        )}
      </fieldset>
      <fieldset className="w-full flex gap-3">
        <fieldset className="w-1/2 flex flex-col gap-2">
          <label className="text-sm">Data de Validade : </label>
          <input
            type="month"
            placeholder="MM/AA"
            className={`w-full h-11 border ${
              errors?.dataValidade ? "border-red-600" : "border-gray-400"
            }  flex p-2 rounded text-sm`}
            {...register("dataValidade")}
          />
          {errors.dataValidade && (
            <span className="text-xs text-red-600">
              {errors.dataValidade?.message}
            </span>
          )}
        </fieldset>
        <fieldset className="w-1/2 flex flex-col gap-2">
          <label className="text-sm">Código CVV : </label>
          <input
            type="text"
            placeholder="000"
            className={`w-full h-11 border ${
              errors?.codigoCVV ? "border-red-600" : "border-gray-400"
            }  flex p-2 rounded text-sm`}
            {...register("codigoCVV")}
          />
          {errors.codigoCVV && (
            <span className="text-xs text-red-600">
              {errors.codigoCVV?.message}
            </span>
          )}
        </fieldset>
      </fieldset>
    </form>
  );
};
