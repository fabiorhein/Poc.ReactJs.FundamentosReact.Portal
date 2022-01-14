import React from "react";
import { useState } from "react/cjs/react.development";

export default (props) => {

    const [numeros, setNumeros] = useState(Array(props.qtdeNumeros).fill(0));

    function gerarNumerosNaoContido(array) {
        const valorMin = 1;
        const valorMax = 60;
        const novoNumero = parseInt(Math.random() * (valorMax - valorMin)) + valorMin;

        return array.includes(novoNumero) ? gerarNumerosNaoContido(array) : novoNumero;
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumeros)
            .fill(0)
            .reduce((a) => {
                return [...a, gerarNumerosNaoContido(a)]
            }, [])
            .sort((a, b) => a - b);

        setNumeros(novoArray);
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </>
    )
}
