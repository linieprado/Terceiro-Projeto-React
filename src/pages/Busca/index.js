import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'

import '../Busca/styles.css'

const Busca = () =>{
    const [personagens, setPersonagem] = useState([]) 
    const [filtroPersonagem, setFiltroPersonagem] = useState([])
    const [busca, setBusca] = useState('')

    useEffect(()=>{
        const pegaDados = async () => {
            const resposta = await fetch('https://www.breakingbadapi.com/api/characters')
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
        < Menu />
            <div>
                 <input className='button' placeholder="Digite um personagem" onChange={e=>{setBusca(e.target.value)}}/>
                    {filtroPersonagem.map(personagem=> (
                        <div key={personagem.id} className="main-breaking">
                            <h2>{personagem.name}</h2>
                            <p>{personagem.occupation}</p>
                            <img src={personagem.img} alt={personagem.name}/>
                        </div>
                    ))}           
             </div>
        </>
    )
}

export default Busca

