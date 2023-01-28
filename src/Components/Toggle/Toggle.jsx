import { useContext } from 'react';
import React from 'react'
import "./Toggle.css"
import { ThemeContext } from '../../Context'

export default function Toggle() {

    const theme = useContext(ThemeContext)

    function handleClick(){
        theme.dispatch({type:"TOGGLE"})
    }

    return <>


        <div className="t">
            <i class="fa-solid fa-sun"></i>
            <i class="fa-solid fa-moon"></i>
            <div className="button" onClick={handleClick} style={{left: theme.state.darkMode ? -1 : 26}}></div>
        </div>



    </>
}
