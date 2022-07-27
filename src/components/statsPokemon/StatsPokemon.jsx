// Componentes
import React from 'react';

// Styles
import './StatsPokemon.css';

const StatsPokemon = ({stats}) => {

    return (        
        <>
            <table className="table-wrapper">
                <thead>
                    <tr>
                        <th>Name Stat</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {stats.map( (stat, i) => 
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