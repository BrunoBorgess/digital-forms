
import '../../App.css';
import { Link } from 'react-router-dom';

function Contato(){
  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contato</h1>
      <p className="text-lg text-gray-600">Bem-vindo à página de contato!</p>
    </div>
  )
}

export default Contato;