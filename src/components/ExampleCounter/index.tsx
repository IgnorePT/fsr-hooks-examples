// Hooks - funções predefinidas que podemos utilizar a qualquer momento
// useState - manipular estados
// useEffect - efeitos secundarios

import { useState } from "react"

// useCallback
// useMemo
// useReduce
// useRef

// useCart -- Custom hook - criado por nos

// useState - função que retorna um array com um estado e uma função para modificar o estado
// useState(valorInicial)
// - recebe: valor inicial
// - retorna: Array[state, setState]

function ExampleCounter() {

    // nota: retorna um array
    //const stateArray = useState();

    // Versao mais simples do use state
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>Melhor aplicação de contador</h1>
            <div className="card">
                <button onClick={() => {
                    console.log("Click");
                    setCounter(counter + 1)
                }}>
                    Contador é {counter}
                </button>
            </div>
        </>
    )
}

export default ExampleCounter