import { Link } from "react-router-dom";



function Footer() {
    return (
        <footer >
            <div className="bg-[#01579b] text-white flex relative flex-col items-center justify-center  text-justify leading-relaxed mt-20  px-6 w-full  lg:px-50">
                <h1 className="font-extrabold m-4">Digital Forms © 2025</h1>
                <p className="text-lg  md:text-2xl">BPF Digital Forms é um modelo de SaaS (Software As A Service), ou seja, você não precisa instalar nada em sua máquina. Basta ter conexão com a internet e acessar pelo navegador ou aplicativo. A plataforma substitui o uso de papel, evita erros e mantém sua equipe alinhada em tempo real. Para planos de assinatura, consulte nosso departamento comercial utilizando o formulário ao lado.
                </p>
                <div className="flex flex-wrap justify-center mt-8 gap-6 md:gap-4">
                <p className="flex-1 min-w-[100px] text-center text-xs md:text-lg">
                    ©Todos os direitos reservados
                </p>
                <a
                    className="flex-1 min-w-[100px] text-center font-semibold text-xs md:text-lg cursor-pointer"
                    href="https://bpf.digital/politica-de-privacidade"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Termos e Condições de Uso
                </a>
                <a
                    className="flex-1 min-w-[100px] text-center font-semibold text-xs md:text-lg"
                    href="https://bpf.digital/politica-de-privacidade"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Política de Privacidade
                </a>
                </div>



                <h1 className="text-center  font-semibold py-4 m-4 md:text-2xl">
                    © 2025 Digital Forms. Todos os direitos reservados.
                </h1>
            </div>
        </footer>
    );           
}
export default Footer;