import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#111] text-white w-full mt-20 shadow-inner shadow-gray-700/20">
      <div className="flex flex-col items-center justify-center text-justify leading-relaxed px-6 py-12 max-w-7xl mx-auto">
        
        <h1 className="font-extrabold m-4 text-2xl md:text-3xl 
          bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600
          bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        >
          Digital Forms © 2025
        </h1>

        <p className="text-lg md:text-2xl mb-8 text-gray-300 drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]">
          BPF Digital Forms é um modelo de SaaS (Software As A Service), ou seja, você não precisa instalar nada em sua máquina. Basta ter conexão com a internet e acessar pelo navegador ou aplicativo. A plataforma substitui o uso de papel, evita erros e mantém sua equipe alinhada em tempo real. Para planos de assinatura, consulte nosso departamento comercial utilizando o formulário ao lado.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
          <p className="flex-1 min-w-[120px] text-center text-xs md:text-lg text-gray-400">
            ©Todos os direitos reservados
          </p>
          <a
            className="flex-1 min-w-[120px] text-center font-semibold text-xs md:text-lg cursor-pointer hover:text-gray-400 transition-colors duration-300"
            href="https://bpf.digital/politica-de-privacidade"
            target="_blank"
            rel="noopener noreferrer"
          >
            Termos e Condições de Uso
          </a>
          <a
            className="flex-1 min-w-[120px] text-center font-semibold text-xs md:text-lg cursor-pointer hover:text-gray-400 transition-colors duration-300"
            href="https://bpf.digital/politica-de-privacidade"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidade
          </a>
        </div>

        <h1 className="text-center font-semibold py-4 m-4 md:text-2xl text-gray-300 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
          © 2025 Digital Forms. Todos os direitos reservados.
        </h1>

      </div>
    </footer>
  );
}

export default Footer;
