import React from "react"
import Ifpr from './assets/ifprUmuarama.jpeg'
import Selo from './assets/fotoSelo5Mec.png'

function GaleriaIFPR() {
    return (
        <>
            <img className="fotoIfpr" src={Ifpr} />
            <img className="selo" src={Selo} />
        </>
    )
}

export default GaleriaIFPR