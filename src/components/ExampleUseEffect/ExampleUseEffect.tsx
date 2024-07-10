// UseEffect - Efeitos Secudarios
// useEffect() - recebe 2 parametros
// - 1º Parametro: função (callback function) *Obrigatoria
// - Array[] - Array de dependencias (opcional)

import { useEffect, useState } from "react"



function ExampleUseEffect() {
    // Universo da logica
    const [online, setOnline] = useState(true)
    const [online2, setOnline2] = useState(true)
    const [countries, setCountries] = useState([])

    // Vai ser executado em todas as renderizações
    useEffect(() => {
        console.log("UseEffect sem array de dependencias")
    })

    // Vai ser executado na primeira renderização
    useEffect(() => {
        console.log("UseEffect com array de dependencias VAZIO")
        //Fetch de dados
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(countriesData => {
                setCountries(countriesData)
            })
    }, [])


    useEffect(() => {
        console.log("UseEffect com array de dependencias COM VARIAVEIS")
    }, [online])

    //Universo da UI
    return (
        <div>
            UseEffect {" "} <br></br>
            {online ? "Estou online" : "Estou offline"}
            <hr></hr>
            <button onClick={() => setOnline(!online)}>Colocar {" "} {online ? "Offline" : "Online"}</button><br></br>
            <button onClick={() => setOnline2(!online2)}>Colocar {" "} {online2 ? "Offline" : "Online"}</button>
            <select>
                {countries.map((country) => <option>{country.name.common}</option>)}

            </select>

        </div>
    )
}

export default ExampleUseEffect