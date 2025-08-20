import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Header from './components/Header';
import Sistema from './pages/Sistema';
import Integracao from './pages/integracao';
import Parceiros from './pages/Parceiros';
import Footer from './components/Footer';




    const AppRoutes = () => { 
        return(
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/Contato" element={<Contato />}/>    
                    <Route exact path="/Sistema" element={<Sistema />}/>
                    <Route exact path="/Integracao" element={<Integracao/>}/>
                    <Route exact path="/Parceiros" element={<Parceiros/>} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        )
    }

export default  AppRoutes;