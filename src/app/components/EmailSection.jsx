'use client'
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";


const EmailSection = () => {
 /* const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('/api/send/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        console.log('Mensagem enviada com sucesso.');
        setEmailSubmitted(true);
      } else {
        console.error('Erro ao enviar a mensagem.');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    }
  };
*/
  return (
      <section id="contact" className="flex  items-center justify-center h-screen">
        <div className="flex-col z-10  max-w-screen-lg">
          <h5 className="text-xl font-bold text-center text-white my-5">
            Entre em contato comigo
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md text-center">
          Você pode entrar em contato comigo através do meu email pessoal
            brunocorrea094@gmail.com.
            Também tem a opção de entrar em contato via whatsapp (48) 984623161 e rede sociais abaixo
        </p>

          <div className="socials flex justify-center flex-row gap-2">
            <Link href="github.com">
              <Image src={GithubIcon} alt="Github Icon"/>
            </Link>
            <Link href="linkedin.com">
              <Image src={LinkedinIcon} alt="Linkedin Icon"/>
            </Link>
          </div>
        </div>
        {/*} <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email enviado
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Seu email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="exemplo@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="insira um assunto"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="escreva sua mensagem"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar mensagem
            </button>
          </form>
        )}
      </div>{*/}
      </section>
  );
};

export default EmailSection;
