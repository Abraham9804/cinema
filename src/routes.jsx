import {Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Favoritos from './pages/favoritos';

const AppRoutes = () => {
    return (     
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/favoritos" element={<Favoritos />} />
            </Routes>
    )
        
}

export default AppRoutes