import {Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Favoritos from './pages/favoritos';
import Player from './pages/player';
import NotFound from './pages/notFound';



const AppRoutes = () => {
    return (     
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/:id" element={<Player />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
    )
        
}

export default AppRoutes