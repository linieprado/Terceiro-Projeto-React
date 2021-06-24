import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'

import Axios from 'axios'

const DragonBall = () =>{
    const [personagens, setPersonagem] = useState([]) 
    const [filtroPersonagem, setFiltroPersonagem] = useState([])
    const [busca, setBusca] = useState('')

    useEffect(()=>{
        const pegaDados = async () => {
            const resposta = await fetch('https://dragon-ball-api.herokuapp.com/api/character')
            const dados = await resposta.json()
            setPersonagem(dados)
        }
        pegaDados()
    },[])

    useEffect(()=>{
        setFiltroPersonagem(
            personagens.filter(personagem => {
                return personagem.name.includes(busca)
            })
        )
    },[busca, personagens])

    return(
        <>
            <input placeholder="Digite um personagem" onChange={e=>{setBusca(e.target.value)}}/>
            {filtroPersonagem.map(personagem=> (
                <div key={personagem.id}>
                    <div className="main" >
                    <p>{personagem.name}</p>
                    <img src={personagem.image} alt={personagem.name}/>
                    {personagem.favorite && <span>Favorito</span>}
                     </div>
                </div>
                
            ))}
        </>
    )
}

export default DragonBall

