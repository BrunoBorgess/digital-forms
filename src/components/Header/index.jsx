import { motion } from "framer-motion";
import digitallogo from "../../assets/digitallogo.png";

function Header() {
  return (
    <header className="bg-[#0a0a0a] text-white py-4 relative z-50 shadow-lg shadow-gray-700/40">
      <nav className="flex justify-center items-center h-16 px-6">
        {/* LOGO ANIMADA */}
        <motion.img
          src={digitallogo}
          alt="Logo Digital"
          className="object-contain w-[160px]"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        />
      </nav>
    </header>
  );
}

export default Header;
