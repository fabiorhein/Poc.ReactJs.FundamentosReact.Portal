import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from "./components/basicos/ComParametro";
import Card from './components/laytout/Card';

import './App.css'
import ComFilhos from "./components/basicos/ComFilhos";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Super from "./components/comunicacao/indireta/Super";
import Pai from "./components/comunicacao/direta/Pai";
import Input from "./components/form/Input";

import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#11 - Mega" color="#5f9ea0">
                <Mega qtdeNumeros={8}></Mega>
            </Card>
            <Card titulo="#10 - Contador" color="#1753E3">
                <Contador passo={10} valor={50}></Contador>
            </Card>
            <Card titulo="#09 - Input" color="#945651">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação indireta" color="#3B092E">
                <Super sobrenome="Freitas"></Super>
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="#FA25C5">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#06 - Condicional com If" color="#FA6900">
                <CondicionalComIf numero={11}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Condicional" color="#E94C6F">
                <Condicional numero={10}></Condicional>
            </Card>
            <Card titulo="#04 - Repetição" color="#836FFF">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 - Componente com Filhos" color="#87CEEB">
                <ComFilhos>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente com Parametro" color="#20B2AA">
                <ComParametro titulo="Esse é o Titulo" subtitulo="Esse é o subtitulo"></ComParametro>
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#006400">
                <Primeiro></Primeiro>
            </Card>
        </div>


    </div>
);