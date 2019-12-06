import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.svg";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Mail from "../../img/mail.png";
import {connect} from 'react-redux'
import "../../sass/Footer.scss";

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grupo: [
        {
          nome: "Carla D'Abreu",
          linkedin: " /carladabreu",
          github: " /carlavieira",
          email: " carlaamvieira@gmail.com"
        },
        {
          nome: "Gabriel Lopes",
          linkedin: " /GabielLopesFerreira",
          github: " /lope3x",
          email: " glf7655@gmail.com"
        },
        {
          nome: "Luiz Gustavo Torres",
          linkedin: " /torresluizg",
          github: " /torresluizg",
          email: " torresluizgtech@gmail.com"
        },
        {
          nome: "Otávio Guimarães",
          linkedin: " /otavio-guimaraes",
          github: " /oGuimaraes",
          email: " otaviovgsr@gmail.com"
        }
      ]
    };
  }

  render() {
    return (
      <div id="footer">
        <Link to="/">
          <img src={Logo} alt="logo" id="logoFooter" />
        </Link>
        <p id="nomeEmpresa">© 2019 - Tranqueiria</p>
        {this.props.adminON ?(
        <Link id="linkAdmin" to="/admin">
          Admin
        </Link>)
        : ''}
        {this.state.grupo.map(elemento => (
          <p id="controleDeVisao">
            <ul className="nomeTime">
              <li>{elemento.nome}</li>
              <li>
                <img src={Github} alt="git logo" className="imagensFooter" />
                {elemento.github}
              </li>
              <li>
                <img src={LinkedIn} alt="linkedin logo" className="imagensFooter" />
                {elemento.linkedin}
              </li>
              <li>
                <img src={Mail} alt="email logo" className="imagensFooter" />
                {elemento.email}
              </li>
            </ul>
          </p>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { 
      adminON:state.adminON
  };
};
export default connect(mapStateToProps) (Footer)

