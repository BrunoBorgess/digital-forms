import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // <-- import motion
import logo from "../../assets/bpf-ofc.png";
import digitallogo from "../../assets/digitallogo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [closing, setClosing] = useState(false); 

  const handleCloseMenu = () => {
    setClosing(true); 
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 800);
  }

  // Variants para animação dos links
  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.1 }
  };

  return (
    <header className="bg-[#01579b] text-white py-6 relative z-50">
      {/* Menu desktop */}
      <nav className='hidden md:flex justify-between items-center h-15 p-4 bg-[#01579b] text-white'>
        {/* LOGO ANIMADA */}
        <motion.img 
          src={digitallogo} 
          alt="digitalLogo" 
          className="object-contain w-[150px] mr-[35px]"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 2 }}
        />

        <ul className="flex gap-15 pr-20 font-bold ">
          <motion.li
            variants={linkVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <Link to="/" className="text-amber-50 hover:text-gray-400 transition-colors duration-500 cursor-pointer">Quem Somos</Link>
          </motion.li>
          <motion.li
            variants={linkVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <Link to="/Sistema" className="text-amber-50 hover:text-gray-400 transition-colors duration-500 cursor-pointer">Sistemas</Link>
          </motion.li>
          <motion.li
            variants={linkVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <Link to="/Integracao" className="text-amber-50 hover:text-gray-400 transition-colors duration-500 cursor-pointer">Integração</Link>
          </motion.li>
          <motion.li
            variants={linkVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <Link to="/Parceiros" className="text-amber-50 hover:text-gray-400 transition-colors duration-500 cursor-pointer">Parceiros</Link>
          </motion.li>
          <motion.li
            variants={linkVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <Link to="/Contato" className="text-amber-50 hover:text-gray-400 transition-colors duration-500 cursor-pointer">Contato</Link>
          </motion.li>
        </ul>
      </nav>

      {/* Botão hamburger mobile */}
      <div className="relative flex md:hidden justify-between items-center p-4  text-white py-1">
        <button
          onClick={() => {
            if (menuOpen) {
              handleCloseMenu();  // Fechar o menu com animação suave
            } else {
              setMenuOpen(true);  // Abrir o menu
            }
          }}
          className="text-2xl font-bold cursor-pointer hover:text-gray-400 transition-colors duration-500"
        >
          ☰
        </button>
        <img 
          src={digitallogo} 
          alt="Logo" 
          className="absolute left-1/2 -translate-x-1/2 w-[150px] mr-[35px]"
        />
      </div>

      {/* Menu Mobile flutuante */}
      {menuOpen && (
        <ul className={`md:hidden absolute top-full left-0 w-full bg-[#01579b80] p-4 flex flex-col gap-4 z-50 ${closing ? 'animate-slideOut' : 'animate-slideIn'} text-center`}>
          <li className="transform transition duration-300 ease-out opacity-0 translate-y-[10px] animate-slideIn delay-150">
            <Link to="/" className="text-amber-50 hover:text-gray-400 transition-colors duration-500 cursor-pointer" onClick={handleCloseMenu}>Quem Somos</Link>
          </li>
          <li className="transform transition duration-300 ease-out opacity-0 translate-y-[10px] animate-slideIn delay-250">
            <Link to="/Sistema" className="text-amber-50 hover:text-gray-400 transition-colors duration-500 cursor-pointer" onClick={handleCloseMenu}>Sistema</Link>
          </li>
          <li className="transform transition duration-300 ease-out opacity-0 translate-y-[10px] animate-slideIn delay-350">
            <Link to="/Integracao" className="text-amber-50 hover:text-gray-400 transition-colors duration-500 cursor-pointer" onClick={handleCloseMenu}>Integração</Link>
          </li>
          <li className="transform transition duration-300 ease-out opacity-0 translate-y-[10px] animate-slideIn delay-450">
            <Link to="/Parceiros" className="text-amber-50 hover:text-gray-400 transition-colors duration-500 cursor-pointer" onClick={handleCloseMenu}>Parceiros</Link>
          </li>
          <li className="transform transition duration-300 ease-out opacity-0 translate-y-[10px] animate-slideIn delay-550">
            <Link to="/Contato" className="text-amber-50 hover:text-gray-400 transition-colors duration-500 cursor-pointer" onClick={handleCloseMenu}>Contato</Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
