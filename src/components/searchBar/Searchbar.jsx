// Componentes
import React, {useState} from 'react';
import StatsPokemon from '../statsPokemon/StatsPokemon';

// Utils
import { searchPokemon } from '../../api';

// Styles
import './Searchbar.css';

const Error = ({msg}) => {
        return(
        <div>
            {msg}
        </div>
    )}

const Searchbar = () => {
    
    const [input, setInput] = useState("");
    const [pokeSprites, setPokeSprites] = useState({});
    const [pokeStats, setPokeStats] = useState([]);
    const [areErrors, setAreErrors] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isFetching, setIsFetching] = useState(false);

    const getPokemons = async(userSearch)=>{
        setIsFetching(true);
        try{
            const data = await searchPokemon(userSearch);

            if(data === undefined){
                setAreErrors(true);
                setErrorMsg(`El pokemon ${input} no se encuentra en nuestra base de datos`);
                throw new Error();
            }

            if(data.sprites === undefined){
                setAreErrors(true);
                setErrorMsg(`Por favor ingrese el nombre de un pokemon`)
                throw new Error();
            }

            const {
                sprites,
                stats,
            } = data;

            setAreErrors(false);
            setPokeSprites(sprites.front_default);
            setPokeStats(stats);
            
        }catch(error){
            console.error(error)
        } finally{
            setIsFetching(false)
        }            
    };

    const onChange = (evento) => {       
        setInput (evento.target.value);
    }

    const onClick = async () =>{
        getPokemons(input)
    }    

    return (
        <div>
            {

                isFetching ?
                <div>
                    loading...
                </div>
                :
                <div>
                    
                    <input type="search" placeholder="Buscar tu pokemon" onChange={onChange} />
                    <button onClick={onClick}>Buscar</button>
                    
                    {
                    areErrors ?
                    <Error msg={errorMsg} /> :
                    <>                    
                    <StatsPokemon stats={pokeStats} />
                    <img src={pokeSprites} alt="PokeApi" className="navbar-image"/>
                    </>
                    }
                </div>

            }
        </div>
  );
}

export default Searchbar;