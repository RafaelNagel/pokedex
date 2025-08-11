import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Pokedex from './pokedex/Pokedex';
import PokemonDetails from './pokemon/services/PokemonDetails';

interface RoutesProps {
    
}

const AppRoutes: React.FC<RoutesProps> = () => {
    return (
        <Routes>
            <Route path="/pokemon/:name" 
            element= {<PokemonDetails />} />
            <Route path="/" 
            element={<Pokedex />} />
        </Routes>
    );
};

export default AppRoutes;