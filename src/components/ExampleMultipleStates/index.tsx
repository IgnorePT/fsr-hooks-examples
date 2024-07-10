import { useState } from "react";

function ExampleMultipleStates() {
    // Logica aqui...
    const [name, setName] = useState('');
    const [age, setAge] = useState(0)

    return (
        <div>
            <h1>Perfil:</h1>
            <div>
                <label>Nome: </label>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Inserir o teu nome..." />
            </div>
            <div>
                <label>Idade: </label>
                <input onChange={(e) => setAge(parseInt(e.target.value))} type="number" placeholder="Inserir a tua idade" />
            </div>
            <h2>
                Olá, eu sou {name} e tenh {age} anos.
            </h2>
        </div>
    );
}

export default ExampleMultipleStates