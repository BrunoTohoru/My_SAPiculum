import React from 'react'
import './Guia.css'

function Guia({ index, vetorGuia, guiaAtivo, clicou, texto }) {

    return (
        <>
            <button onClick={() => clicou(index, vetorGuia)} className={guiaAtivo ? 'guia' : 'guia escondido'}>
                <h5 className={guiaAtivo ? 'texto' : 'texto escondido'}>
                    {texto}
                </h5>
            </button>
        </>
    )
}

export default Guia