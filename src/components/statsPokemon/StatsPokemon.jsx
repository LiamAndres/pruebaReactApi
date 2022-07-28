// Componentes
import React, {useState} from 'react';

// Styles
import './StatsPokemon.css';

const StatsPokemon = ({stats}) => {
    
    const [statsPokemon, setStatsPokemon] = useState(stats);
    const [isOrder, setIsOrder] = useState(false);
    
    const onClick = () =>{

        let baseStat = []

        if (isOrder) {
            baseStat = [...stats].sort(function(a, b){return b.base_stat - a.base_stat })            
            setIsOrder(false)
        }else {
            baseStat = [...stats].sort(function(a, b){return a.base_stat - b.base_stat})            
            setIsOrder(true)
        }
        
        setStatsPokemon( baseStat )
        
    }
    
    return (        
        <>        
            <table className="table-wrapper"> 
                <thead>
                    <tr>
                        <th>Name Stat</th>
                        <th onClick={onClick}>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {statsPokemon.map( (stat, i) => 
                    <tr key={stat + i}>
                        <td>{stat.stat.name}</td>
                        <td>{stat.base_stat}</td>
                    </tr>)  } 
                </tbody>
            </table>
        </>
    );
}

export default StatsPokemon;