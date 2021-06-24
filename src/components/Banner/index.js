import React from 'react'
import Img from "../../assets/imagem.svg"

import './../Banner/styles.css'
const Banner = () => {
    return(
        <div className="main">
        <div>

             <h1>App Divertido</h1>
             <p> Site feito em React e Axios! Vem comigo!!</p>
        
        </div>
        <img src={Img} alt= "Ilustração Banner" />

        </div>

    )

}
export default Banner