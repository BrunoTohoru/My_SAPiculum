import React, { useState } from "react"
import Guia from './Guia'
import Conteudo from './Conteudo'
import './Layer.css'

function Layer() {
    const [guiaAtivo, setGuiaAtivo] = useState([true, false, false, false, false, false, false]);
    const [info, setInfo] = useState(0)

    function clicou(index, guiaAtivo) {
        const guiaAux=[false, false, false, false, false, false, false];
        guiaAux[index]=true;
        setInfo(index);
        setGuiaAtivo(guiaAux);
        return guiaAtivo
    }

    return (
        <div>
            {<Guia index={0} vetorGuia={guiaAtivo} guiaAtivo={guiaAtivo[0]} clicou={clicou} texto="Curriculum"/>}
            {<Guia index={1} vetorGuia={guiaAtivo} guiaAtivo={guiaAtivo[1]} clicou={clicou} texto="Sobre" />}
            {<Guia index={2} vetorGuia={guiaAtivo} guiaAtivo={guiaAtivo[2]} clicou={clicou} texto="Formações"/>}
            {<Guia index={3} vetorGuia={guiaAtivo} guiaAtivo={guiaAtivo[3]} clicou={clicou} texto="Experiências"/>}
            {<Guia index={4} vetorGuia={guiaAtivo} guiaAtivo={guiaAtivo[4]} clicou={clicou} texto="Competências"/>}
            {<Guia index={5} vetorGuia={guiaAtivo} guiaAtivo={guiaAtivo[5]} clicou={clicou} texto="Contatos"/>}
            {<Guia index={6} vetorGuia={guiaAtivo} guiaAtivo={guiaAtivo[6]} clicou={clicou} texto="Extras"/>}
            <div className="camada">
                {<Conteudo info={info}/>}
            </div>
        </div>
    )
}

export default Layer