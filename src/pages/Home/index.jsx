import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import bpfLogo from "../../assets/bpf-logo.avif";
import bpfVideo from "../../assets/bpf-video.mp4";
import Banner from "../../assets/Bannerteste.jpg";
import fluxo1 from "../../assets/fluxo1.png";
import Banner2 from "../../assets/banner2.jpg";
import Banner3 from "../../assets/banner3.jpg";
import { motion, AnimatePresence } from "framer-motion";
import digitallogo from "../../assets/formscor.png";
import industria from "../../assets/industria.png";
import { BarChart, CheckCircle, Shield, Zap } from "lucide-react";

function Home() {
  const slides = [
    Banner, 
    Banner2,
    Banner3,
    bpfLogo,
  ];

  const slides2 = [
    industria, 
    Banner2,
    Banner3,
    bpfLogo,
  ];


  const [current, setCurrent] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);

  const cards = [
    {
      title: "Digital Forms",
      desc: "Plataforma principal para digitalização de documentos.",
      details: (
              <div>
                <p>Digital Forms permite digitalizar documentos de forma rápida, segura e organizada.</p>
                <img src={digitallogo} alt="Digital Forms" className="mt-2 rounded-lg" />
              </div>
      )
    },
    {
      title: "BPF Digital",
      desc: "Versão especializada para indústrias reguladas (MAPA).",
      details: (
              <div>
                <p>Digital Forms permite digitalizar documentos de forma rápida, segura e organizada.</p>
                <img src={bpfLogo} alt="Digital Forms" className="mt-2 rounded-lg" />
              </div>
      )
    },
    {
      title: "Segurança",
      desc: "Armazenamento seguro e em conformidade com normas.",
      details: "Todos os dados são criptografados, com backup automático e acesso controlado, garantindo total segurança."
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col items-center w-full">
      <Helmet>
        <title>Home - BPF</title>
        <meta
          name="description"
          content="Bem-vindo à BPF. Descubra nossos serviços, digitalização e informações sobre nossa empresa."
        />
      </Helmet>

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

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded opacity-70 hover:opacity-100 transition"
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded opacity-70 hover:opacity-100 transition"
        >
          {">"}
        </button>
      </div>

      <div className="text-justify  leading-relaxed mt-20 px-6 py-9 w-full lg:px-100">
        <motion.h1
          className="text-4xl md:text-6xl font-semibold text-center
                    bg-gradient-to-r from-[#01579b] via-[#0277bd] to-[#29b6f6]
                    bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Da Produção ao Controle: Tudo em um só Sistema
        </motion.h1>
        <br/><br/><br/>
        <div className="flex justify-center mt-8">
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl 
                          bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 
                          p-[3px] hover:shadow-indigo-500/40 transition duration-500">
            <video
              className="w-full h-auto rounded-2xl bg-black"
              controls
              src={bpfVideo}
            />
            <div className="absolute inset-0 rounded-2xl pointer-events-none 
                            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                            opacity-0 hover:opacity-30 blur-2xl transition duration-700" />
          </div>
        </div><br/><br/><br/>

        <motion.h1
          className="text-4xl md:text-6xl font-semibold text-center
                    bg-gradient-to-r from-[#01579b] via-[#0277bd] to-[#29b6f6]
                    bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Uma plataforma completa para transformar sua operação em resultados.
        </motion.h1><br/><br/>
        <motion.p
          className="text-black text-lg text-center font-light md:text-3xl mt-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
            >
            Aqui você encontra mais informações sobre boas práticas de fabricação.
        </motion.p>
        <motion.p
          className="text-black text-lg font-light md:text-3xl mt-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          A plataforma <strong>BPF Digital (APP + Web)</strong> simplifica a gestão de boas práticas de fabricação em setores como sementes,
          fertilizantes, nutrição animal e alimentício. Com registros digitais intuitivos, blockchain e certificação digital,
          elimina o uso de papel, evita erros e mantém sua equipe alinhada em tempo real. Mais eficiência, segurança e
          transparência em cada etapa, aproximando sua empresa do padrão ISO 9000.
        </motion.p>

        <motion.p
          className="text-4xl md:text-6xl font-semibold text-center my-20
          bg-gradient-to-r from-[#01579b] via-[#0277bd] to-[#29b6f6]
          bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Descubra como simplificar e digitalizar o controle da sua empresa.
        </motion.p>

        <div className="relative w-full h-[350px] md:h-[300px] lg:h-[400px] overflow-hidden">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides2.map((slide, index) => (
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

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded opacity-70 hover:opacity-100 transition"
          >
            {"<"}
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded opacity-70 hover:opacity-100 transition"
          >
            {">"}
          </button>
        </div>
  
        {/* Cards Circulares */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-20 mb-20">
          {[
            { title: "Gestão", icon: <BarChart size={32} /> },
            { title: "Qualidade", icon: <CheckCircle size={32} /> },
            { title: "Segurança", icon: <Shield size={32} /> },
            { title: "Eficiência", icon: <Zap size={32} /> },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 
                        bg-gradient-to-br from-[#01579b] via-[#0277bd] to-[#29b6f6] 
                        text-white rounded-full shadow-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <span className="text-sm md:text-lg font-semibold mt-1">{item.title}</span>
            </motion.div>
          ))}
        </div>


        <div className="flex justify-center items-center w-full">
          <img
            src={fluxo1}
            alt="Banner"
            className="w-full h-auto mt-8 rounded-lg shadow-lg max-w-4xl"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.h2
            className="text-4xl md:text-6xl font-semibold text-center my-20
            bg-gradient-to-r from-[#01579b] via-[#0277bd] to-[#29b6f6]
            bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Nossas Soluções
          </motion.h2>

          {/* Cards de Soluções */}
          <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 px-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative group rounded-2xl bg-white shadow-lg p-6 hover:shadow-2xl transition cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.desc}</p>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {card.details}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCard(card);
                        }}
                        className="mt-4 w-full py-2 bg-[#01579b] text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        Saiba Mais
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>

        <AnimatePresence>
          {selectedCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedCard.title}
                </h3>
              {/*<p className="text-gray-600">{selectedCard.details}</p>*/}
              <p className="text-gray-700 text-lg font-medium md:text-3xl">
                Explore nossos serviços e descubra como podemos ajudar sua empresa a prosperar no mundo digital.
              </p>
              <input 
              type="text"
              placeholder="Digite seu nome completo"
              className="w-full mt-4 p-2 border border-gray-300 rounded-lg"
              />
              <input 
              type="text"
              placeholder="Digite seu email..."
              className="w-full mt-4 p-2 border border-gray-300 rounded-lg"
              />
              <input 
              type="text"
              placeholder="Telefone/whatsapp (00) 00000-0000"
              className="w-full mt-4 p-2 border border-gray-300 rounded-lg"
              />
              <input 
              type="text"
              placeholder="Nome da empresa"
              className="w-full mt-4 p-2 border border-gray-300 rounded-lg"
              />
              <input 
              type="text"
              placeholder="CPF/CNPJ"
              className="w-full mt-4 p-2 border border-gray-300 rounded-lg"
              />
              <select               placeholder="CPF/CNPJ"
              className="w-full mt-4 p-2 border border-gray-300 rounded-lg">
                <option value="" disabled selected>Selecione o tipo de serviço</option>
                <option value="consultoria">Digital Forms</option>
                <option value="treinamento">BPF Digital</option>
              </select>

              <div className="flex justify-between mt-6">
                <button
                  className="px-4 py-2 bg-[#01579b] text-white rounded-lg hover:bg-blue-700 transition"
                  onClick={() => setSelectedCard(null)}
                >
                  Fechar
                </button>
                <button
                  className="px-4 py-2 bg-[#01579b] text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Enviar
                </button>
              </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}

export default Home;
