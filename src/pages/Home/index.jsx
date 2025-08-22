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
import teste1 from "../../assets/mordena.png";
import futurista2 from "../../assets/futurista2.jpg";
import { BarChart, CheckCircle, Shield, Zap } from "lucide-react";

function Home() {
  const slides = [Banner, Banner2, Banner3, bpfLogo];

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
      ),
    },
    {
      title: "BPF Digital",
      desc: "Versão especializada para indústrias reguladas (MAPA).",
      details: (
        <div>
          <p>Digital Forms permite digitalizar documentos de forma rápida, segura e organizada.</p>
          <img src={bpfLogo} alt="Digital Forms" className="mt-2 rounded-lg" />
        </div>
      ),
    },
  

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col items-center w-full bg-[#0a0a0a] text-white">
      <Helmet>
        <title>Home - BPF</title>
        <meta
          name="description"
          content="Bem-vindo à BPF. Descubra nossos serviços, digitalização e informações sobre nossa empresa."
        />
      </Helmet>

      {/* Divider estiloso animado cima*/}
      <div className="w-full my-6 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-2 w-full rounded-full bg-gradient-to-r from-gray-500 via-green-400 to-gray-500 shadow-[0_0_20px_rgb(0,255,170)] origin-right"
        />
      </div>

      {/* Slider Principal */}
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
              className="w-full h-full object-cover flex-shrink-0 brightness-75"
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 
          bg-gray-700/70 hover:bg-gray-600 text-white px-3 py-2 rounded-lg shadow-lg"
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 
          bg-gray-700/70 hover:bg-gray-600 text-white px-3 py-2 rounded-lg shadow-lg"
        >
          {">"}
        </button>
      </div>


      {/* Divider estiloso animado meio */}
      <div className="w-full my-6 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-2 w-full rounded-full bg-gradient-to-r from-gray-500 via-green-400 to-gray-500 shadow-[0_0_20px_rgb(0,255,170)] origin-left"
        />
      </div>


      {/* Seção Intermediária */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center px-10"
        style={{ backgroundImage: `url(${teste1})` }}
      >
        {/* Overlay para contraste */}
        <div className="absolute inset-0  bg-black/50 hidden lg:block"></div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-2xl text-left text-white">
          <h2 className="text-4xl font-bold mb-4">Digitalizando papéis e solucionando problemas</h2>
          <p className="text-lg mb-6">
            Digital Forms é uma plataforma SaaS que transforma a forma como você gerencia documentos e processos.
          </p>
          <button className="px-8 py-3 rounded-lg text-white font-semibold 
            bg-[rgb(0,255,170)] shadow-[0_0_15px_rgb(0,255,170),0_0_30px_rgb(0,255,170)] 
            hover:scale-105 transition-transform duration-300">
            Agendar reunião
          </button>
        </div>
      </div>

      {/* Divider estiloso animado baixo*/}
      <div className="w-full my-6 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}      // anima quando entra na viewport
          viewport={{ once: true, amount: 0.5 }} // só anima uma vez, quando 50% visível
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-2 w-full rounded-full bg-gradient-to-r from-gray-500 via-green-400 to-gray-500 shadow-[0_0_20px_rgb(0,255,170)] origin-right"
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="text-justify leading-relaxed mt-20 px-6 py-9 w-full lg:px-100">
        <motion.h1
          className="text-4xl md:text-6xl font-semibold text-center
          bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600
          bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Da Produção ao Controle: Tudo em um só Sistema
        </motion.h1>

        <div className="flex justify-center mt-8">
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden 
            shadow-2xl p-[3px] bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700
            hover:shadow-[0_0_30px_rgba(150,150,150,0.6)] transition duration-500">
            <video
              className="w-full h-auto rounded-2xl bg-black"
              controls
              src={bpfVideo}
            />
          </div>
        </div>

        <motion.h1
          className="text-4xl md:text-6xl font-semibold text-center my-12
          bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600
          bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Uma plataforma completa para transformar sua operação em resultados.
        </motion.h1>

        <motion.p
          className="text-white text-lg text-center font-light md:text-3xl mt-8 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          Aqui você encontra mais informações sobre boas práticas de fabricação.
        </motion.p>


        <motion.p
          className="text-white text-lg font-light md:text-3xl mt-8 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          A plataforma <strong className="text-gray-400">BPF Digital (APP + Web)</strong> simplifica a gestão de boas práticas de fabricação em setores como sementes,
          fertilizantes, nutrição animal e alimentício. Com registros digitais intuitivos, blockchain e certificação digital,
          elimina o uso de papel, evita erros e mantém sua equipe alinhada em tempo real.
        </motion.p>

        {/* Cards Circulares Cinza */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-20 mb-20">
          {[{ title: "Gestão", icon: <BarChart size={32} /> },
            { title: "Qualidade", icon: <CheckCircle size={32} /> },
            { title: "Segurança", icon: <Shield size={32} /> },
            { title: "Eficiência", icon: <Zap size={32} /> },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 
                bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700
                text-white rounded-full shadow-lg hover:scale-105 transition-transform
                shadow-[0_0_20px_rgba(150,150,150,0.6)]"
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

        {/* Fluxo */}
        <div className="flex justify-center items-center w-full">
          <img
            src={fluxo1}
            alt="Banner"
            className="w-full h-auto mt-8 rounded-lg shadow-[0_0_30px_rgba(150,150,150,0.5)] max-w-4xl"
          />
        </div>

        {/* Cards de Soluções */}
        <div className="max-w-7xl  grid grid-cols-1 md:grid-cols-2 gap-8 mb-20  mt-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group rounded-2xl bg-[#111] shadow-lg p-6 
                hover:shadow-[0_0_20px_rgba(150,150,150,0.8)] transition cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-400">{card.title}</h3>
              <p className="text-gray-300 mb-4">{card.desc}</p>

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
                      className="mt-4 w-full py-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 text-white rounded-lg hover:scale-105 transition"
                    >
                      Saiba Mais
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Modal Saiba Mais */}
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
                className="bg-[#111] rounded-xl p-6 max-w-md w-full shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold text-gray-400 mb-4">{selectedCard.title}</h3>

                {/* Texto do card */}
                <p className="text-gray-300 mb-4">
                  Explore nossos serviços e descubra como podemos ajudar sua empresa a prosperar no mundo digital.
                </p>

                {/* Inputs */}
                <input
                  className="w-full p-2 bg-gray-800 text-white rounded-lg mb-4"
                  placeholder="Digite seu nome"
                />
                <input
                  className="w-full p-2 bg-gray-800 text-white rounded-lg mb-4"
                  placeholder="Digite seu email"
                />
                <input
                  className="w-full p-2 bg-gray-800 text-white rounded-lg mb-4"
                  placeholder="Telefone/WhatsApp"
                />

                {/* Botões */}
                <div className="flex justify-between mt-4">
                  <button
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:brightness-125 transition"
                    onClick={() => setSelectedCard(null)}
                  >
                    Fechar
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:brightness-125 transition"
                  >
                    Enviar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Divider estiloso animado cima*/}
      <div className="w-full my-6 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}      // anima quando entra na viewport
          viewport={{ once: true, amount: 0.5 }} // só anima uma vez, quando 50% visível
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-2 w-full rounded-full bg-gradient-to-r from-gray-500 via-green-400 to-gray-500 shadow-[0_0_20px_rgb(0,255,170)] origin-rigth"
        />
      </div>

      {/* Seção de baixo */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-end px-10"
        style={{ backgroundImage: `url(${futurista2})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 hidden lg:block"></div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-2xl text-white text-center lg:text-right lg:ml-auto">
          <h2 className="text-4xl font-bold mb-4">O digital é a solução</h2>
          <p className="text-lg mb-6">
            A migração para o digital melhora processos e organização da empresa, tornando o dia a dia mais prático e seguro. Permite anexar documentos e imagens, como notas fiscais e registros fotográficos, otimizando controle e rastreabilidade, e facilita fiscalização e auditoria com acesso rápido e confiável às informações.
          </p>
          <button className="px-8 py-3 rounded-lg text-white font-semibold 
            bg-[rgb(0,255,170)] shadow-[0_0_15px_rgb(0,255,170),0_0_30px_rgb(0,255,170)] 
            hover:scale-105 transition-transform duration-300">
            Agendar reunião
          </button>
        </div>
      </div>


      {/* Divider estiloso animado baixo */}
      <div className="w-full my-6 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}      // anima quando entra na viewport
          viewport={{ once: true, amount: 0.5 }} // só anima uma vez, quando 50% visível
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-2 w-full rounded-full bg-gradient-to-r from-gray-500 via-green-400 to-gray-500 shadow-[0_0_20px_rgb(0,255,170)] origin-left"
        />
      </div>


    </div>
  );
}

export default Home;
