import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import bpfLogo from "../../assets/bpf-logo.avif";
import bpfVideo from "../../assets/bpf-video.mp4";
import Banner from "../../assets/Bannerteste.jpg";
import Banner2 from "../../assets/banner2.jpg";
import Banner3 from "../../assets/banner3.jpg";
import { motion, AnimatePresence } from "framer-motion";
import digitallogo from "../../assets/digitallogo.png";
import teste1 from "../../assets/mordena.png";
import futurista2 from "../../assets/futurista2.jpg";
import industria2 from "../../assets/industria2.jpg";
import agro from "../../assets/agro.jpg";
import comercio from "../../assets/comercio.jpg";
import seguranca from "../../assets/segurancatb.jpg";
import mapa2 from "../../assets/mapa2.png";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock } from 'react-icons/fi';
import Calendario from "../../components/Calendar";
import { BsCameraVideo } from "react-icons/bs";
import figma from "../../assets/figma-dg.png";
import sofintec from "../../assets/sofintec.avif";
import senai from "../../assets/senai.avif";
import sebrae from "../../assets/sebrae.avif";
import ifms from "../../assets/ifms.avif";
import living from "../../assets/living.avif";
import anatel from "../../assets/anatel.avif";
import inmetro from "../../assets/inmetro.avif";
import sebraeEvento from "../../assets/sebrae2.jpeg";
import { BarChart, CheckCircle, Shield, Zap } from "lucide-react";
import { MdComputer } from "react-icons/md";

function Home() {
  const slides = [Banner, Banner2, Banner3];
  const slides2 = [industria2, agro, comercio, seguranca];
  const [showEvento, setShowEvento] = useState(true);


  const openModal = (cardData) => {
  setSelectedCard(cardData);
  };

  const [current, setCurrent] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  
  {/* teste para o calendário */}
  const [showCalendario, setShowCalendario] = useState(false);
  {/* teste  */}

  {/* const slide superior */}
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);

  {/* const dos cards da página final digital forms e bpf */}
  const cards = [
    {
      title: "Digital Forms",
      desc: "Plataforma principal para digitalização de documentos.",
      details: (
        <div className="mt-10 flex flex-col items-center bg-gradient-to-br from-blue-100 to-white shadow-2xl rounded-3xl p-8 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-blue-700 mb-3 text-center">{`Digital Forms`}</h2>
          <p className="text-gray-600 mb-5 text-center">{`Digital Forms permite digitalizar documentos de forma rápida, segura e organizada.`}</p>
          <img 
            src={digitallogo} 
            alt="Digital Forms" 
            className="rounded-b-full max-w-3/4 h-auto mb-5 shadow-lg" 
          />
          <ul className="text-gray-700 list-disc list-inside mb-4">
            <li>Digitalização rápida e segura</li>
            <li>Organização de documentos eficiente</li>
            <li>Compatível com dispositivos móveis</li>
          </ul>
        </div>
      ),
    },
    {
      title: "BPF Digital",
      desc: "Versão especializada para indústrias reguladas (MAPA).",
      details: (
        <div className="mt-10 flex flex-col items-center bg-gradient-to-br from-green-100 to-white shadow-2xl rounded-3xl p-8 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-green-700 mb-3 text-center">{`BPF Digital`}</h2>
          <p className="text-gray-600 mb-5 text-center">{`Versão especializada para indústrias reguladas (MAPA).`}</p>
          <img 
            src={bpfLogo} 
            alt="BPF Digital" 
            className="rounded-b-full max-w-3/4 h-auto mb-5 shadow-lg" 
          />
          <ul className="text-gray-700 list-disc list-inside mb-4">
            <li>Conformidade com normas regulatórias</li>
            <li>Controle detalhado de processos</li>
            <li>Segurança e rastreabilidade</li>
          </ul>

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
    <div className="flex flex-col items-center w-full bg-[#0a0a0a] text-white overflow-x-hidden ">
      <Helmet>
        <title>Digital Forms</title>
        <meta
          name="description"
          content="Bem-vindo à Digital Forms. Descubra nossos sobre nossos serviços de digitalizção de documentos seguindo normas do MAPA."
        />
      </Helmet>

      {/* Divider  animado cima*/}
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

      


      {/* Divider animado meio */}
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
          <button 
            className="px-8 py-3 rounded-lg text-white font-semibold 
              bg-[rgb(0,255,170)] shadow-[0_0_15px_rgb(0,255,170),0_0_30px_rgb(0,255,170)] 
              hover:scale-105 transition-transform duration-300"
            onClick={() => openModal({
                  title: "Agendar Reunião",
                  details: (
                    <div 
                    className="flex flex-col items-center gap-4">
                    </div>
                      ),
                    })}
            >
            Agendar reunião
          </button>
          
        </div>
        
     {/*  Bloco do evento no topo - remover após fim do evento  */}
      <AnimatePresence>
        {showEvento && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.section
              className="relative w-full max-w-3xl bg-gradient-to-r from-green-400 via-blue-500 to-green-400 text-white rounded-3xl shadow-2xl p-8 flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white"
                initial={{ y: -30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                 Presença confirmada no Sebrae Startup Summit 2025
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-center mb-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Agende uma reunião e teste nossa solução na sua empresa sem custos
              </motion.p>

              <motion.img
                src={sebraeEvento}
                alt="Sebrae Empretec Fest 2025"
                className="w-full rounded-2xl shadow-xl mb-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />

              <motion.button
                onClick={() => openModal({
                  title: "Agendar Reunião",
                  details: (
                    <div className="flex flex-col items-center gap-4">
                    </div>
                  ),
                })}
                className="px-6 py-3 bg-white text-green-600 font-bold rounded-xl shadow-lg hover:scale-105 transition-transform mb-4 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Agendar Reunião 
              </motion.button>


              <button
                onClick={() => setShowEvento(false)}
                className="mt-2 text-white/80 hover:text-white font-semibold cursor-pointer"
              >
                Fechar
              </button>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>

      </div>

      {/* Divider animado baixo*/}
      <div className="w-full my-6 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}      // anima quando entra na viewport manter por hora
          viewport={{ once: true, amount: 0.5 }} // só anima uma vez, quando 50% visível
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-2 w-full rounded-full bg-gradient-to-r from-gray-500 via-green-400 to-gray-500 shadow-[0_0_20px_rgb(0,255,170)] origin-right"
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="text-justify leading-relaxed mt-20  px-4 py-9 w-full lg:px-100">
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
        
        {/* Video principal - em teste  */}
        <motion.div 
        className="flex justify-center mt-8 px-4"
        initial={{ opacity: 0, y: 80 }}      // começa invisível e levemente abaixo
        whileInView={{ opacity: 1, y: 0 }}   // anima até posição final
        transition={{ duration: 5, ease: "easeOut" }} // transição suave
        viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full rounded-2xl overflow-hidden 
            shadow-2xl p-[3px] bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700
            hover:shadow-[0_0_30px_rgba(150,150,150,0.6)] transition duration-500">
            <motion.video
              className="w-full aspect-video rounded-2xl bg-black 
                        object-contain "
              controls
              src={bpfVideo}
              
            />
          </div>
        </motion.div>
        

      {/* Seção Figma Full Width com animação e texto */}
      <motion.div
        className="relative w-screen overflow-hidden mt-20"
        initial={{ opacity: 0, y: 80 }}      // começa invisível e levemente abaixo
        whileInView={{ opacity: 1, y: 0 }}   // anima até posição final
        transition={{ duration: 5, ease: "easeOut" }} // transição suave
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.img
          src={figma}
          alt="Seção Figma"
          className="w-screen max-w-none object-contain"
          initial={{ opacity: 0, y: 80 }}      // começa invisível e levemente abaixo
          whileInView={{ opacity: 1, y: 0 }}   // anima até posição final
          transition={{ duration: 5, ease: "easeOut" }} // transição suave
          viewport={{ once: true, amount: 0.3 }}
        />

          {/* Texto no canto superior esquerdo */}
          <div className="absolute top-20 left-10 max-w-md">
            <motion.h2
              className="text-4xl md:text-6xl font-semibold text-white 
                        bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 
                        bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1}}
            >
              solução em suas mãos
            </motion.h2>

            <motion.p
               className="mt-4 text-white text-sm sm:text-base md:text-3xl leading-snug max-w-xs sm:max-w-sm md:max-w-md drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              Fichas e documentos da sua empresa centralizados em um único lugar, eliminando riscos de multas por descumprimento de normas, processos ou perda de documentos.
            </motion.p>
          </div>
        </motion.div>

        <motion.h1
          className="font-nunito text-4xl md:text-6xl font-semibold text-center my-12
          bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600
          bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] "
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
                bg-[#111] text-white rounded-xl p-6
                shadow-[0_0_15px_rgba(0,255,170,0.6)] hover:shadow-[0_0_25px_rgb(0,255,170)]
                transition-transform transform hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <span className="text-sm md:text-lg font-semibold mt-1">{item.title}</span>
            </motion.div>
          ))}
        </div>


        <motion.p
          className="text-white text-lg font-light md:text-3xl mt-8 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
            Voltada exclusivamente para melhor controle e padronização de registros, independentemente da cadeia produtiva.

            Aliada principalmente ao atendimento de Normativas Federais (IN  N°04/2007)  e com foco em melhoria contínua
        </motion.p>

        {/* Seção de Imagens Flutuantes */}

        <div className="w-full flex justify-center mt-20 mb-20">
          <div className="relative w-full max-w-6xl h-64">
            <AnimatePresence>
              {slides2.map((slide, index) =>
                index === current && (
                  <motion.div
                    key={index}  // começa invisível e levemente abaixo
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 1 }}
                    viewport={{amount: 0.2}}
                  >
                    {/* Imagem */}
                    <motion.img
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Título sobre a imagem */}
                    <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                    text-white text-2xl md:text-3xl font-bold drop-shadow-lg
                                    text-center px-4">
                      {["Indústrias", "Agronegócio", "Comércio", "Segurança do trabalho"][index]}
                    </h3>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>



        <motion.h1
          className="text-4xl md:text-6xl font-semibold text-center
          bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600
          bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Soluções reais e eficiêncientes
        </motion.h1>
       

        {/* Cards de Soluções */}
        <div className="w-full bg-[#0a0a0a] px-6 lg:px-20 py-16 lg:py-24 flex justify-center">
          <div className="flex flex-col gap-6 max-w-7xl w-full select-none">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-[#111] rounded-xl p-6 shadow-[0_0_15px_rgba(0,255,170,0.6)] 
                          hover:shadow-[0_0_25px_rgb(0,255,170)] transition-transform transform hover:scale-105 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-2xl font-bold mb-2 text-white">{card.title}</h3>
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
                          openModal(card);
                        }}

                        className={`mt-4 w-full py-2 text-white rounded-3xl shadow-2xl 
                          hover:scale-105 transition-transform duration-300
                          ${
                            card.title === "Digital Forms"
                              ? "bg-gradient-to-br from-blue-500 to-blue-700"
                              : "bg-gradient-to-br from-green-500 to-green-700"
                          }`}
                      >
                        Saiba Mais
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Destaque Sebrae Empretec Fest 2025 */}
        <motion.div
          className="w-full relative flex flex-col items-center justify-center py-16 bg-[#111]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center 
            bg-gradient-to-r from-green-400 via-blue-500 to-green-400 
            bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,170,0.6)] mb-8">
            Presença confirmada no Sebrae Startup Summit 2025
          </h2>

          <motion.img
            src={sebraeEvento} // 📌 Imagem JPEG importada
            alt="Sebrae Empretec Fest 2025"
            className="max-w-4xl w-full rounded-2xl shadow-2xl mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Botão de agendamento - abre o modal */}
          <motion.button
            onClick={() => openModal({
              title: "Agendar Reunião",
              details: (
                <div className="flex flex-col items-center gap-4">
                  <p className="text-white text-lg text-center">
                    Garanta seu teste do produto no Sebrae Empretec Fest 2025.
                  </p>
                </div>
              )
            })}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 
              text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 
              transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Agendar reunião e testar nosso produto
          </motion.button>
        </motion.div>





        {/* Sessão formulário modal*/}
        <AnimatePresence>
          {selectedCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto p-4"
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-[#111] rounded-xl shadow-xl w-full max-w-4xl p-6 flex flex-col md:flex-row gap-6"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Lado esquerdo: texto + calendário */}
                <div className="flex-1 flex flex-col gap-4 overflow-auto">
                  <h3 className="text-2xl font-bold text-gray-400">{selectedCard.title}</h3>
                  <p className="text-gray-300">
                    Agende uma reunião para falar com nossos especialistas e obtenha uma <strong>demonstração</strong> dos nossos sistemas.
                  </p>
                  <Calendario />

                  <div className="hidden md:flex flex-col gap-2 mt-2">
                    {/* Ícone de câmera + texto */}
                    <div className="flex items-center gap-3 mb-1 text-gray-400 font-semibold">
                      <BsCameraVideo className="w-6 h-6 text-cyan-500" />
                      <p>Webconferência com especialistas</p>
                    </div>

                    {/* Ícone de relógio + texto */}
                    <div className="flex items-center gap-3 mb-1 font-semibold text-gray-400">
                      <FiClock className="w-6 h-6 text-cyan-500" />
                      <p>Atendimento rápido e eficiente</p>
                    </div>

                    <div className="flex items-center gap-3 mt-1 font-semibold text-gray-400">
                      <MdComputer className="w-6 h-6 text-cyan-500"/>
                      <p>Demonstração para testar na sua empresa</p>
                    </div>
                  </div>
                  
                </div>

                {/* Lado direito: formulário */}
                <div className="flex-1 flex flex-col gap-4 overflow-auto">
                  <input className="w-full p-2 bg-gray-800 text-white rounded-lg" placeholder="Digite seu nome" />
                  <input className="w-full p-2 bg-gray-800 text-white rounded-lg" placeholder="Digite seu email" />
                  <input className="w-full p-2 bg-gray-800 text-white rounded-lg" placeholder="Telefone/WhatsApp" />
                  <input className="w-full p-2 bg-gray-800 text-white rounded-lg" placeholder="Nome da empresa" />
                  <input className="w-full p-2 bg-gray-800 text-white rounded-lg" placeholder="CPF/CNPJ" />

                  <select className="w-full bg-gray-800 text-white rounded-lg p-2">
                    <option value="" disabled selected>Cargo/Função</option>
                    <option value="diretor">Diretor</option>
                    <option value="gerente">Gerente</option>
                    <option value="engenheiro">Engenheiro</option>
                    <option value="coordenador">Coordenador</option>
                    <option value="analista">Analista</option>
                    <option value="gestor">Gestor</option>
                  </select>

                  <select className="w-full bg-gray-800 text-white rounded-lg p-2">
                    <option value="" disabled selected>Selecione o produto</option>
                    <option value="digital forms">Digital Forms</option>
                    <option value="bpf digital">BPF Digital</option>
                  </select>

                  <div>
                    <label className="block text-gray-400 text-sm mb-1">Modelo de ficha</label>
                    <input
                      type="file"
                      className="w-full p-2 bg-gray-800 text-white rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-600 file:text-white hover:file:bg-green-500"
                    />
                  </div>

                  {/* Botões */}
                  <div className="flex justify-end gap-4 mt-2">
                    <button
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:brightness-125 transition"
                      onClick={() => setSelectedCard(null)}
                    >
                      Fechar
                    </button>
                    <button
                      className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:brightness-125 transition"
                    >
                      Agendar
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Seção de parcerias - mexer e alinhar e add imagens certas */}
      <motion.div
        className="w-full min-h-[320px] relative flex flex-col items-center justify-center px-6 py-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        animate={{
          background: [
            "linear-gradient(to bottom, #0a0a0a, rgba(255,255,255,0.05) 50%, #0a0a0a)",
            "linear-gradient(to bottom, #0a0a0a, rgba(255,255,255,0.15) 50%, #0a0a0a)",
            "linear-gradient(to bottom, #0a0a0a, rgba(255,255,255,0.05) 50%, #0a0a0a)"
          ]
        }}
      >
        {/* Título */}
        <motion.h2
          className="text-4xl md:text-6xl mb-18 font-semibold text-center
          bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600
          bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Parceria com empresas de tecnologia para construir o futuro
        </motion.h2>
        {/* Logos organizadas em linhas com animação individual */}
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
          {[sofintec, senai, sebrae, ifms, living, anatel, inmetro].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Partner ${i}`}
              className="h-16 md:h-24 object-contain"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
            />
          ))}
        </div>
      </motion.div>






      {/* Texto + Cards  mapa  escritório*/}
      <div className="w-full bg-[#0a0a0a] px-6 lg:px-20 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-center gap-10">

        
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h2
            className="text-4xl md:text-6xl font-semibold text-center
            bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600
            bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Temos escritórios em...
          </motion.h2>

          <motion.p
            className="mb-12 text-white text-lg font-light md:text-3xl mt-8 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            Nossos escritórios estão localizados nas melhores regiões para melhor atende-los.
          </motion.p>

          <div className="flex flex-col gap-6 w-full">
            {[
              { title: "Brasil", desc: "Nossa sede em Campo Grande, MS, coordena uma ampla rede de mais de 10 hubs operacionais em cidades estratégicas como Cuiabá (MT), Rondonópolis (MT), Lucas do Rio Verde (MT), Ji-Paraná (RO), Londrina (PR), São Paulo (SP), Rio Verde de Goiás (RV), Ribeirão Preto (SP), Rio de Janeiro (RJ) e Chapecó (SC)", hours: "Seg a Sex, 24H" },
              { title: "Portugal", desc: "Localizados em Aveiro (Grande Porto) e com parcerias estratégicas com a Universidade de Aveiro, a Incubação Cidade de Barreiro (Grande Lisboa) e o Centro de Inovação Startup Barreiro, ampliamos nossa rede de inovação e reforçamos o apoio ao empreendedorismo.", hours: "Seg a Sex, 24H" },
              { title: "Espanha", desc: "Localizados nas cidades de Castellón e Valência, estabelecemos uma colaboração estratégica com o Centro de Inovação de Valência, fortalecendo nossa presença e ampliando as possibilidades de inovação e desenvolvimento conjunto.", hours: "Seg a Sex, 24H" }
            ].map((card, index) => (
              <motion.div
                key={index}
                className="bg-[#111] rounded-xl p-6 shadow-[0_0_15px_rgba(0,255,170,0.6)] hover:shadow-[0_0_25px_rgb(0,255,170)] transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                <p className="text-gray-400">{card.desc}</p>
                {/*<p className="text-gray-400">Contato: {card.contact}</p>*/}
                <p className="text-gray-400">Atendimento: {card.hours}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mapa */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center lg:justify-around "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={mapa2} 
            alt="Mapa dos Escritórios"
            className="w-full max-w-3xl lg:mt-45  rounded-xl shadow-[0_0_25px_rgb(0,255,170)] object-contain bg-[#111]"
          />
        </motion.div>

      </div>


      {/* Divider estiloso animado cima*/}
      <div className="w-full my-6 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}      // anima quando entra na viewport
          viewport={{ once: true, amount: 0.5 }} // só anima uma vez, quando 50% visível
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-2 w-full rounded-full bg-gradient-to-r from-gray-500 via-green-400 to-gray-500 shadow-[0_0_20px_rgb(0,255,170)] origin-right"
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
          <button 
            className="px-8 py-3 rounded-lg text-white font-semibold 
              bg-[rgb(0,255,170)] shadow-[0_0_15px_rgb(0,255,170),0_0_30px_rgb(0,255,170)] 
              hover:scale-105 transition-transform duration-300"
            onClick={() => openModal({
                  title: "Agendar Reunião",
                  details: (
                    <div 
                    className="flex flex-col items-center gap-4">
                    </div>
                      ),
                    })}
            >
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




      {/* Ícone flutuante WhatsApp neon */}
      <motion.a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 mb-3
                  md:bottom-20 md:right-28 flex items-center justify-center"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{
          scale: 1.2,
          boxShadow: "0 0 35px rgb(0,255,170), 0 0 70px rgb(0,255,170)",
        }}
        style={{
          width: "5rem",  // w-16
          height: "5rem", // h-16
          borderRadius: "9999px", // totalmente arredondado
          backgroundColor: "rgb(0,255,170)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 15px rgb(0,255,170), 0 0 30px rgb(0,255,170)",
          cursor: "pointer",
        }}
      >
        <FaWhatsapp className="text-white w-8 h-8 md:w-10 md:h-10" />
      </motion.a>
    </div>
    
  );
}

export default Home;
