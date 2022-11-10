import React from "react";
import { BiSearch } from "react-icons/bi";
import "./Buscador.css";


const Buscador = ({handleBuscador}) => {
    return(
        <>
        <div className='contBuscador'>
            <BiSearch className='search' />
            <input onChange={(event) => handleBuscador(event.target.value.toLowerCase())} type="text" placeholder='Buscá por nombre' className="inputBuscador" />
        </div>
        </>
    )
}

export default Buscador;