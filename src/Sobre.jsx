import React from "react"
import Foto1 from './assets/fotoSobre1.jpg'
import Foto2 from './assets/fotoSobre2.png'
import './Sobre.css'

function Sobre() {
    return (
        <>
            <div className="estiloFolha">
                <div className="textoFolha ajuste">
                    <h2>Bruno Tohoru Shiotani</h2>
                    <p>
                        Brasileiro. Solteiro. 28 anos <br />
                        Umuarama - PR
                    </p>
                    <hr />
                    <p>
                        Estudante de Análise e Desenvolvimento de Sistemas altamente motivado, com sólida compreensão dos princípios fundamentais de programação e desenvolvimento de software.
                    </p>
                    <p>
                        Experiência prática em linguagens de programação como Java, JavaScript, PHP e Python, além de conhecimento em bancos de dados SQL.
                    </p>
                    <p>
                        Habilidades em análise de requisitos e design de sistemas, juntamente com a capacidade de resolver problemas de forma criativa e eficiente.
                    </p>
                    <p className="p2">
                        Proativo na aprendizagem de novas tecnologias e frameworks, buscando sempre atualização constante para acompanhar as tendências da indústria de TI.
                    </p>
                    <p>
                        Possuo boa comunicação interpessoal e trabalho em equipe.
                    </p>
                    <p className="p2">
                        Estou entusiasmado em buscar novas oportunidades para continuar crescendo profissionalmente e contribuir para o sucesso de uma equipe dinâmica e inovadora. Estou confiante de que posso agregar valor e fazer a diferença em qualquer projeto ou organização com a qual eu me envolva.
                    </p>
                    <p className="p2">
                        Busco um cargo de Desenvolvedor Júnior, combinando minha paixão pela programação com habilidades analíticas. Estou determinado a contribuir com soluções inovadoras, trabalhando em equipe para criar produtos de qualidade e promover meu crescimento profissional.
                    </p>
                </div>
            </div>
            <div className="foto1">
                <img src={Foto1} />
            </div>
            <div className="foto2">
                <img src={Foto2} />
            </div>
        </>
    )
}

export default Sobre