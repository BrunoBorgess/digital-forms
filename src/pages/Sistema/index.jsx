import { Helmet } from "react-helmet";
import banner from "../../assets/banner-test.jpg";

function Sistema() {
 


  return (
    <div className="flex flex-col items-center w-full">
      <Helmet>
        <title>Sistema - BPF</title>
        <meta
          name="description"
          content="Sistema BPF: Soluções de digitalização e integração de sistemas para eficiência empresarial."
        />
      </Helmet>
      <div className="w-full">
        <img
          src={banner}
          alt="banner"
          className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
        />
      </div>
      <div className="text-justify leading-relaxed mt-20  px-6 w-full  lg:px-50">
        <h1 className="mt-5 md:text-5xl text-lg flex justify-center font-bold font-stretch-extra-expanded">Nosso Sistema</h1><br/>
        <p className="mt-2 text-gray-700 text-lg md:text-4xl">
          Aqui você encontra mais informações sobre boas práticas de fabricação.
        </p><br/><br/>
        <p className="text-gray-700 text-lg font-semibold md:text-3xl">
        A plataforma <strong>BPF Digital (APP + WebApplication)</strong> traz
        inovação para a gestão de boas práticas de fabricação e conformidade
        regulatória em diversos segmentos da indústria, como sementes,
        fertilizantes, nutrição animal, alimentício e outros.
        </p>
        <p className="mt-4 text-gray-700 text-lg font-semibold md:text-3xl">
        Ela proporciona praticidade e agilidade no registro e controle das
        operações de produção, com uma interface intuitiva que facilita o uso
        por colaboradores e gestores. Os registros utilizam tecnologia
        blockchain, o que garante credibilidade, segurança e valor legal (cível
        e criminal). Além disso, promove a padronização digital dos processos
        industriais, reduzindo erros e aumentando a eficiência.
        </p>
        <p className="mt-4 text-gray-700 text-lg font-semibold md:text-3xl">
        Na gestão documental, a plataforma elimina o excesso de papel e
        substitui por uma base de dados confiável e certificada de 1ª e 2ª
        parte. É possível anexar documentos aos POPs, evitando rasuras e
        extravios. Toda a equipe se mantém alinhada em tempo real, com logins
        individuais e assinaturas digitais, permitindo acompanhamento e
        rastreabilidade de todas as atividades.
        </p>
        <p className="mt-4 text-gray-700 text-lg font-semibold md:text-3xl">
        Essa inovação facilita a comprovação durante fiscalizações de órgãos
        públicos, assegura transparência e conformidade em cada etapa do processo
        e aproxima a indústria dos padrões de qualidade, ficando a poucos passos
        de uma certificação ISO 9000.
        </p>
      </div>

    </div>


  );
}

export default Sistema;
