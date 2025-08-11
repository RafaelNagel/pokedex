import React, { useEffect, useState } from 'react';
import { PokemonDetail } from '../interfaces/PokemonDetail';
import { getPokemonDetails } from './getPokemonDetails';
import { AppBar, Toolbar, IconButton, Typography, Box, Container, capitalize } from '@mui/material';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface PokemonDetailsProps {
    
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
   const Navigate = useNavigate();

  const handleGoBack  = () =>{
      Navigate(-1);
    }

    const { name } = useParams<{name: string}>();
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);
    function capitalizeFirstLetter(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
    
    useEffect(() => {
        if(!name) return;

        getPokemonDetails(name)
        .then ((response) => setSelectedPokemonDetails(response))

    }, [name]);

    return (
        <div>
           <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ArrowBackIcon sx={{ mr: 2}} onClick={handleGoBack}>
          </ArrowBackIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            {capitalizeFirstLetter(name!)}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
            

      <Container maxWidth="lg">
        <Box mt={2}>
            <img width= '50%' height='50%' src={selectedPokemonDetails?.sprites.front_default} alt = ""/>
        </Box>
        <Typography variant='h2'>
          {name && selectedPokemonDetails?.name}
        </Typography>
        {/*selectedPokemonDetails?.types.map((type) => <Typography>{type.type.name}</Typography>)*/}

        <Box display= "flex" flexDirection='row'>
        <Typography>
          Altura: 
        </Typography>
        <Typography>
        {selectedPokemonDetails?.height}m
        </Typography>
        </Box>

        <Box display= "flex" flexDirection='row'>
        <Typography>
          Peso: 
        </Typography>
        <Typography>
        {selectedPokemonDetails?.weight}kg
        </Typography>
        </Box>

        <Box display= "flex" flexDirection='row'>
        <Typography>
          Habilidade: 
        </Typography>
        <Typography>
        {selectedPokemonDetails?.abilities.map((ability) => <Typography>{capitalizeFirstLetter(ability.ability?.name!)}</Typography>)}
        </Typography>
        </Box>
      </Container>    
    </div>
  );
};

export default PokemonDetails;