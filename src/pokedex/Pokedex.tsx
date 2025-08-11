import React, { useEffect, useState } from 'react';
import { listPokemons, PokemonListInterface } from '../pokemon/services/listPokemons';
import { PokemonDetail } from '../pokemon/interfaces/PokemonDetail';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'; 
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import PokedexCard from './components/PokedexCard';
import { useQuery } from 'react-query';
import { LinearProgress } from '@mui/material';



interface PokedexProps {
    
}



export const Pokedex: React.FC<PokedexProps> = () => {  
    const { data, isLoading, isRefetching } = useQuery(`listPokemons`, listPokemons);
    
    return (
        <div>
             <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokedex
          </Typography>
        </Toolbar>
        {isRefetching && <LinearProgress variant='indeterminate' color='secondary' />}
      </AppBar>
    </Box>
            
        <Container maxWidth="lg">
                <Box mt={4}>
                    <Grid container spacing= {2}>
                        {data?.results.map((pokemon) =>(
                            <Grid size={6}>
                              <PokedexCard pokemon={pokemon} />
                                </Grid>
                        ))}
                            </Grid>
                </Box>
        </Container>
        </div>
    );
};

export default Pokedex;

