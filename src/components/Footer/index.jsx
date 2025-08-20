import { Link } from "react-router-dom";



function Footer() {
    return (
        <footer >
            <div className="bg-[#01579b] text-white flex relative flex-col items-center justify-center  text-justify leading-relaxed mt-20  px-6 w-full  lg:px-50">
                <h1 className="font-extrabold m-4">BPF © 2024</h1>
                <p className="text-lg  md:text-2xl">COOPIG é um modelo de SaaS (Software As A Service), ou seja você não precisará comprar o software e instalar em sua máquina, você apenas paga pelo serviço e todo o acesso é realizado no seu navegador preferido, desde que tenha conexão de internet.
                Para planos de assinatura, consulte nosso departamento comercial, utilizando o formulário ao lado.
                </p>
                <div className="flex flex-wrap mt-4 gap-4">
                    <p className="w-40 text-center text-sm md:text-lg">©Todos os direitos reservados</p>
                    <a className="w-40 text-center font-semibold text-sm md:text-lg cursor-pointer"
                    href="https://bpf.digital/politica-de-privacidade"
                    target="-blank"
                    rel="noopener noreferrer"
                    >Termos e Condições de Uso
                    </a>

                    <a
                    className="w-40 text-center font-semibold text-sm md:text-lg"
                    href="https://bpf.digital/politica-de-privacidade"  
                    target="-blank"
                    rel="noopener noreferrer"
                    >Politica de privacidade
                    </a>
                    
                </div>

                <h1 className="text-center  text-lg  font-semibold py-4 m-4 md:text-2xl">
                    © 2025 BPF Digital. Todos os direitos reservados.
                </h1>
            </div>
        </footer>
    );           
}
export default Footer;