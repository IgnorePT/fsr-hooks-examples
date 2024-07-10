// Controled form | Controlled Inputs

import { useState } from "react";

// function ExampleForm(props) {

//     const [name, setName] = useState(props.name)

//     function handleInput(event) {
//         setName(event.target.value)
//     }

//     return (
//         <div>
//             <h1>Bem-vindo, {name ? name : "cenas"}</h1>
//             <input value={name} onChange={handleInput} type="text" placeholder="Inserir nome" />
//             <button>Submit</button>
//         </div>
//     );
// }


function ExampleForm(props) {

    const [name, setName] = useState(props.name)

    function handleInput(event) {
        setName(event.target.value)
    }

    async function onSubmit() {
        //Chamada a api
        const data = {
            name
        }

        const res = await fetch("/cenas", { method: "POST", body: data })
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Bem-vindo, {name ? name : "cenas"}</h1>
            <input value={name} onChange={handleInput} type="text" placeholder="Inserir nome" />
            <button>Submit</button>
        </form>
    );
}

export default ExampleForm