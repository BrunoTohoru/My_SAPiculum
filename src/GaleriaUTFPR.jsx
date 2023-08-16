import React from "react"
import Utfpr from './assets/utfprToledo.webp'
import Civil from './assets/engCivil.png'

function GaleriaUTFPR() {
    return (
        <>
            <img className="fotoUtfpr" src={Utfpr} />
            <img className="fotoCivil" src={Civil} />
        </>
    )
}

export default GaleriaUTFPR