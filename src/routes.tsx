import {  Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"; 
import Contact from "./pages/Contact";
import Servicios from "./pages/Servicios";



function AppRoutes() {
    return (
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/servicios" element={<Servicios/>} />
            <Route path="*" element={<NotFound />} />
            <Route path="/:id" element={<NotFound />} />
        </Routes>
        
    );
}

export default AppRoutes;
