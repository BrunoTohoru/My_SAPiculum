import React from "react"
import LogoIn from './assets/linkedin.png'
import LogoGithub from './assets/github.png'


function CartaoTras() {
    return (
        <>
            <div className="cartaoProfi tras">
                <div className="trasProfi">
                    <div className="logo tras">
                        <h1>
                            塩
                            <br />
                            谷
                        </h1>
                    </div>
                    <h2>
                        Bruno Tohoru Shiotani
                    </h2>
                    <p className="p3">
                        WhatsApp: (44) 9 9773-3461 <br />
                        e-Mail: bruno_shiotani@outlook.com <br />
                        <div>
                            <a className="in" href="https://www.linkedin.com/in/bruno-tohoru-shiotani-8048a1150/"><img src={LogoIn} /></a> 
                            <a href="https://github.com/BrunoTohoru"><img src={LogoGithub} /></a>
                        </div>
                    </p>
                </div>
            </div>
        </>
    )
}

export default CartaoTras