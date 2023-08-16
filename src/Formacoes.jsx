import React, { useState } from "react"
import Seta from './assets/fotoSeta.png'
import Formacao1 from './Formacao1'
import Formacao2 from './Formacao2'
import './Formacoes.css'
import GaleriaIFPR from "./GaleriaIFPR"
import GaleriaUTFPR from "./GaleriaUTFPR.JSX"

function Formacoes() {
    const [forma, setForma] = useState(true);

    function mudouForm(forma) {
        let x = forma;
        if (x == true) {
            return setForma(false);
        } else {
            return setForma(true);
        }
    }
    return (
        <div className="pasta">
            <div className="estiloFolha">
                <button onClick={() => mudouForm(forma)}>
                    <img className="passarFolha" src={Seta} />
                </button>
                <div className="textoFolha">
                    <h2>Formação Acadêmica</h2>
                    {forma ? <Formacao1 /> : <Formacao2 />}
                </div>
            </div>

            <div>
                {forma ? <GaleriaIFPR /> : <GaleriaUTFPR />}
            </div>
        </div>
    )
}

export default Formacoes