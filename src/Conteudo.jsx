import React from "react"
import Curriculum from './Curriculum'
import Sobre from './Sobre'
import Formacoes from './Formacoes'
import Experiencias from './Experiencias'
import Competencias from './Competencias'
import Contatos from './Contatos'
import Extras from './Extras'
import './Conteudo.css'


function Conteudo({ info }) {

    if (info == 0) {
        return (
            <>
                <Curriculum />
            </>
        )
    } else if (info == 1) {
        return (
            <>
                <Sobre />
            </>
        )
    } else if (info == 2) {
        return (
            <>
                <Formacoes />
            </>
        )
    } else if (info == 3) {
        return (
            <>
                <Experiencias />
            </>
        )
    } else if (info == 4) {
        return (
            <>
                <Competencias />
            </>
        )
    } else if (info == 5) {
        return (
            <>
                <Contatos />
            </>
        )
    } else if (info == 6) {
        return (
            <>
                <Extras />
            </>
        )
    }

}

export default Conteudo