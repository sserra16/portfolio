import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:sserradev@gmail.com?subject=${formData.subject}&body= Olá, meu nome é ${formData.name}. ${formData.message} (${formData.email})`
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contato
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Eu tenho o que você precisa.{" "}
          <span className="decoration-[#1DA4AD]/50 underline">
            Vamos conversar
          </span>
        </h4>

        <div className="space-y-8">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#1DA4AD] h-7 w-7 animate-pulse" />
            <p className="text-xl">+55 (31)9 8830-0875</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#1DA4AD] h-7 w-7 animate-pulse" />
            <p className="text-xl">sserradev@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#1DA4AD] h-7 w-7 animate-pulse" />
            <p className="text-xl">Contagem - MG</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 px-10 w-fit mx-auto">
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Nome"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Assunto"
              className="contactInput"
              type="text"
            />

            <textarea
              {...register("message")}
              placeholder="Mensagem"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#1DA4AD] py-5 px-10 rounded-md ttext-white font-bold text-lg">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
