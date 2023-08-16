import React from "react"
import fotoReact from "./assets/react.svg"
import fotoVite from "./assets/vite.svg"
import fotoNode from "./assets/nodejs.png"
import './Extras.css'

function Extras() {
    return (
        <>
            <div className="estiloFolha extras">
                <div className="textoFolha ajuste">
                    <h2>Tecnologias utilizadas:</h2>
                    <p>
                        <a href="https://pt-br.react.dev"><img src={fotoReact} /></a>
                    </p>
                    <p>
                        O React demonstra ser uma tecnologia em crescimento no mercado. Muitas das vagas destinadas para Front-End descrevem o interesse nesta tecnologia.
                    </p>
                    <p>
                        Isso é resultado de sua flexibilidade e eficiência no quesito reutilização de códigos. Utilizar essa tecnologia da forma correta, faz com que sua aplicação tenha um maior desempenho, além de facilitar o trabalho com menos linhas de códigos e encurtar prazos de entrega.
                    </p>
                    <p>
                        <a href="https://nodejs.org/en/about"><img width={32} height={32} src={fotoNode} /></a>
                    </p>
                    <p>
                        O NodeJS é, basicamente, um ambiente de execução do código JavaScript no servidor. Não sendo compilado no navegador, como é de costume nas aplicações mais iniciais.
                    </p>
                    <p>
                        Onde é utilizado? Existem muitas possibilidades, algumas delas são nas REST APIs, chatbots, web scraping, IoT, web servers e streming.
                    </p>
                    <p>
                        Porque utilizar? Como o NodeJS usa E/S orientada a eventos e sem bloqueio, torna sua aplicação mais leve e eficiente. ALém de apresentar ser uma ferramenta ótima para criação de aplicativos de rede escaláveis e rápidos.
                    </p>
                    <p>
                        <a href="https://vitejs.dev/guide/why.html"><img src={fotoVite} /></a>
                    </p>
                    <p>
                        O Vite é uma ferramenta de compilação de frontend desenvolvida pela equipe do Vue.js. Foi criada como uma alternativa mais rápida e moderna ao webpack, que é a ferramenta de compilação mais utilizada no ecossistema do JavaScript.
                    </p>
                    <p>
                        A abordagem do Vite é baseada em um servidor de desenvolvimento altamente otimizado que permite compilar e servir módulos de forma individual sob demanda, em vez de compilar todo o código antecipadamente. Isso permite que o Vite ofereça uma compilação muito mais rápida e uma experiência de desenvolvimento mais ágil.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Extras