import React from "react"
import CartaoFrente from './CartaoFrente'
import CartaoTras from './CartaoTras'
import clips from './assets/clipe.png'
import './Contatos.css'

function Contatos() {
    return (
        <>
            <CartaoFrente />
            <CartaoTras />
            <img className="clips contatos" src={clips} />
            <div className="estiloFolha contatos">
                <div className="textoFolha ajuste">
                    <p>
                        Prezado, Recrutador(a):
                    </p>
                    <p>
                        Caso tenha interesse em conhecer mais portfólios ou mais sobre minha pessoa, te convido a visitar meu perfil do Linkedin e do GitHub que constam no cartão ao lado.
                    </p>
                    <p>
                        Este SAP (Single Application Page) foi desenvolvido por mim como parte do meu portifólio e como um currículum vitae mais interativo. Nos extras terá mais informações sobre as técnologias utilizadas em seu desenvolvimento.
                    </p>
                    <p>
                        Agradeço a todos que tenham visualizado esta página, sendo você recrutador, apreciador ou um amigo.
                    </p>
                    <p>
                        Obrigado!
                    </p>
                </div>
            </div>
        </>
    )
}

export default Contatos