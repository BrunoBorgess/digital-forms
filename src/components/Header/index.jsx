import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05 }
  };

  return (
    <header className="bg-[#111] text-white py-4 relative z-50 shadow-lg shadow-gray-700/40">
      {/* Menu desktop */}
      <nav className='hidden md:flex justify-between items-center h-16 px-6'>
        {/* LOGO ANIMADA */}
        <motion.img 
          src={digitallogo} 
          alt="digitalLogo" 
          className="object-contain w-[160px]"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        />

        <ul className="flex gap-10 font-semibold">
          {["Quem Somos","Sistemas","Integração","Parceiros","Contato"].map((item,index) => (
            <motion.li
              key={index}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05, textShadow: "0 0 6px #999" }}
              transition={{ duration: 0.5 + index*0.1 }}
            >
              <Link 
                to={item === "Quem Somos" ? "/" : `/${item.replace("ç","c").replace(" ","")}`} 
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Botão hamburger mobile */}
      <div className="relative flex md:hidden justify-between items-center px-6 py-3">
        <button
          onClick={() => menuOpen ? handleCloseMenu() : setMenuOpen(true)}
          className="text-2xl font-bold cursor-pointer hover:text-gray-400 transition-colors duration-300"
        >
          ☰
        </button>
        <motion.img 
          src={digitallogo} 
          alt="Logo" 
          className="absolute left-1/2 -translate-x-1/2 w-[140px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* Menu Mobile flutuante */}
      {menuOpen && (
        <motion.ul 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`md:hidden absolute top-full left-0 w-full bg-[#111]/90 backdrop-blur-md p-4 flex flex-col gap-4 z-50 rounded-b-lg shadow-lg`}
        >
          {["Quem Somos","Sistemas","Integração","Parceiros","Contato"].map((item,index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index*0.1 }}
            >
              <Link 
                to={item === "Quem Somos" ? "/" : `/${item.replace("ç","c").replace(" ","")}`} 
                className="text-white hover:text-gray-400 text-center font-semibold block py-2 transition-colors duration-300"
                onClick={handleCloseMenu}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}

export default Header;

