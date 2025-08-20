import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import bpfLogo from "../../assets/bpf-logo.avif";
import bpfVideo from "../../assets/bpf-video.mp4";
import Banner from "../../assets/Bannerteste.jpg";
import fluxo1 from "../../assets/fluxo1.png";
import Banner2 from "../../assets/banner2.jpg";
import Banner3 from "../../assets/banner3.jpg";
import { motion } from "framer-motion"

function Home() {
  const slides = [
    Banner, 
    Banner2,
    Banner3,
    bpfLogo,
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);

  const cards = [
  {
    title: "Digital Forms",
    desc: "Plataforma principal para digitalização de documentos.",
  },
  {
    title: "BPF Digital",
    desc: "Versão especializada para indústrias reguladas (MAPA).",
  },
  {
    title: "Segurança",
    desc: "Armazenamento seguro e em conformidade com normas.",
  },
  ]

  // Troca automática de slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // troca a cada 3 segundos
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col items-center w-full">
      {/* aplicação de, temporário SEO */}
      <Helmet>
        <title>Home - BPF</title>
        <meta
          name="description"
          content="Bem-vindo à BPF. Descubra nossos serviços, digitalização e informações sobre nossa empresa."
        />
      </Helmet>

      {/* Carrossel */}
      <div className="relative w-full h-[350px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
            
          ))}
        </div>
        <button
          className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 
             bg-[#01579b80] hover:bg-blue-700 active:bg-blue-800 
             text-white px-6 py-2 rounded-lg shadow-lg transition"
        >
          Agendar reunião
        </button>

        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded opacity-70 hover:opacity-100 transition"
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded opacity-70 hover:opacity-100 transition"
        >
          {">"}
        </button>
      </div>

      {/* Conteúdo abaixo do carrossel */}
      <div className="text-justify leading-relaxed mt-20  px-6 py-9 w-full  lg:px-50">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          A nova era da digitalização
        </motion.h1><br/><br/><br/>
        <div className="flex justify-center">
        <video
          className="w-full h-auto  mt-4 rounded-lg shadow-lg max-w-4xl"
          controls
          src={bpfVideo} 
        />
        </div><br/><br/><br/>

        <h1 className="flex justify-center  text-3xl md:text-4xl font-bold">Nossa solução</h1><br/><br/>
        <p className="text-gray-700 text-lg font-semibold md:text-3xl">
          Aqui você encontra mais informações sobre boas práticas de fabricação.
        </p><br/>
        <p className="text-gray-700 text-lg font-semibold md:text-3xl">
          A plataforma digital do <strong>BPF Digital (APP + Web)</strong> facilita a gestão de boas práticas de fabricação em diversos setores, como sementes, fertilizantes, nutrição animal e alimentício. Ela permite registros de operações de produção de forma intuitiva e ágil, garantindo segurança, padronização e conformidade. Com digitalização confiável, tecnologia blockchain e certificação digital, elimina o uso excessivo de papel, evita rasuras e extravios, e mantém a equipe alinhada em tempo real com logins individuais e assinaturas digitais. A plataforma aumenta a eficiência operacional e promove transparência e credibilidade em cada etapa, aproximando os processos do padrão ISO 9000.
        </p>
        <p className="text-gray-700 text-lg font-semibold md:text-3xl">
          Explore nossos serviços e descubra como podemos ajudar sua empresa a prosperar no mundo digital.
        </p>
        <div className="flex justify-center items-center w-full">
          <img
          src={fluxo1}
          alt="Banner"
          className="w-full h-auto mt-8 rounded-lg shadow-lg max-w-4xl "
          />
          
        </div>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Nossas Soluções
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
       </div>
        
      </div>
      


    </div>
  );
}

export default Home;
