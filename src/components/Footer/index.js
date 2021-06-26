import React from 'react'
import LinkedIn from '../../assets/linkedin.svg'
import GitHub from '../../assets/git.svg'
import Instagram from '../../assets/insta.svg'


import './styles.css'

const Footer = () => {
    return (
        <div className='footer'>
            <h1> <strong>Sobre Mim</strong></h1>
            <h2>Aline Prado</h2>
            <p>Desenvolvedora Front End (HTML, CSS, Javascript, Node.Js) - REPROGRAMA - Turma ON10 (2021) - Em formação
            Pedagoga e Secretária pela Universidade Federal da Bahia</p>
            <p>Especialista em Educação Infantil e Alfabetização</p>
        <div  className='redes'>
            <a className='link' href="https://www.linkedin.com/in/alinepradosilva/">
                <img src={LinkedIn} alt= "Logo LinkedIn"/>
            </a>
            <a className='link' href="https://github.com/linieprado">
                <img src={GitHub} alt= "Logo Github"/>
            </a>
            <a className='link' href="https://www.instagram.com/linieprado/?hl=pt-br">
                <img src={Instagram} alt= "Logo Github"/>
            </a>


        </div>
             
    
        </div>

         



        



    )
            
}
export default Footer
    
    
    
    
    

    



