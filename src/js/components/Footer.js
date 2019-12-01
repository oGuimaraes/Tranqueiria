import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.svg'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Mail from '../../img/mail.png'
import '../../sass/Footer.scss'

export default class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
            grupo:[
            {
                nome: "Carla D'Abreu",
                linkedin: "aaa",
                github: "aaa",
                email: "aaa",
            }, 
            {
                nome: "Gabriel Lopes",
                linkedin: "",
                github: "",
                email: "",
            },
            {
                nome: "Luiz Gustavo Torres",
                linkedin: "",
                github: "",
                email: "",
            },
            {
                nome: "Otávio Guimarães",
                linkedin: "",
                github: "",
                email: "",
            }
          ]
        }
    }

    render() {
        return (
            <div id="footer">
                <Link to="/"><img src={Logo} id="logoFooter" /></Link>
                <p id="nomeEmpresa">© 2019 - Tranqueiria</p>
                {this.state.grupo.map(elemento =>
                        <p>
                            <ul className="nomeTime">
                                <li>{elemento.nome}</li>
                                <li><img src={Github} className="imagensFooter"/>{elemento.linkedin}</li>
                                <li><img src={LinkedIn} className="imagensFooter"/>{elemento.github}</li>
                                <li><img src={Mail} className="imagensFooter"/>{elemento.email}</li>
                            </ul>
                        </p>
                )}
            </div>
        )
    }
}
