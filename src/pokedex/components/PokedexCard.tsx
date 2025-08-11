import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PokemonDetail } from '../../pokemon/interfaces/PokemonDetail';
import { Box, Chip } from '@mui/material';




interface PokedexCardProps {
    pokemon: PokemonDetail;
}

//const Card = styled.section`
    //padding: 4em;
    //border-radius: .5em;
    //background: papayawhip;
//`;

export const PokedexCard: React.FC<PokedexCardProps> = ({  pokemon }) => {
    const [expanded, setExpanded] = React.useState(false);
    
  function capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

    const navigate = useNavigate();

    function handleClick() {
      navigate(`/pokemon/${pokemon.name}`);
    }
    

    return (
         <Card onClick={handleClick} sx={{ maxWidth: 345 }}>
             <CardMedia
               style={{height: '50px', paddingTop: '56%'}}
               image={pokemon.sprites.front_default} 
              />  
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={capitalizeFirstLetter(pokemon.name)}
        subheader={pokemon.types.map((type) => (
            <Box display='flex' gap={1} flexWrap="nowrap" flexDirection="row" overflow="auto">
                <Chip label={type.type.name} variant="outlined" />
            </Box>
        ))}
      />
    </Card>
    );
};

export default PokedexCard;