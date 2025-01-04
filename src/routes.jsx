import {Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import About from './pages/about';

const AppRoutes = () => {
    return (     
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/about" element={<About />} />
            </Routes>
    )
        
}

export default AppRoutes