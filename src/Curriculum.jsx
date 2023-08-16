import React from "react"
import perfil from './assets/perfil.jpg'
import clips from './assets/clipe.png'
import './Curriculum.css'

function Curriculum() {
    return (
        <>
            <div>
                <img className="foto" src={perfil} />
                <img className="clips" src={clips} />
            </div>
            <div>
                <h1 className="folha-capa">Curriculum Vitae</h1>
            </div>
        </>
    )
}

export default Curriculum