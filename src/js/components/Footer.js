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
          linkLi: "https://www.linkedin.com/in/carladabreu/",
          github: " /carlavieira",
          linkGit: "https://github.com/carlavieira",
          email: " carlaamvieira@gmail.com"
        },
        {
          nome: "Gabriel Lopes",
          linkedin: " /GabielLopesFerreira",
          linkLi: "https://www.linkedin.com/in/GabrielLopesFerreira/",
          github: " /lope3x",
          linkGit: "https://github.com/lope3x",
          email: " glf7655@gmail.com"
        },
        {
          nome: "Luiz Gustavo Torres",
          linkedin: " /torresluizg",
          linkLi: "https://www.linkedin.com/in/torresluizg/",
          github: " /torresluizg",
          linkGit: "https://github.com/torresluizg",
          email: " torresluizgtech@gmail.com"
        },
        {
          nome: "Otávio Guimarães",
          linkedin: " /otavio-guimaraes",
          linkLi: "https://www.linkedin.com/in/otávio-guimarães",
          github: " /oGuimaraes",
          linkGit: "https://github.com/oGuimaraes",
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
          <p className="controleDeVisao">
            <ul className="nomeTime">
              <li>{elemento.nome}</li>
              <li>
<<<<<<< HEAD
                <a href={elemento.linkGit} target="_blank" style={{textDecoration:'none'}}>
                  <img src={Github} className="imagensFooter" />
=======
                <img src={Github} alt="git logo" className="imagensFooter" />
>>>>>>> 3612ba9c69ab095f3c9198cd1e0d801947535dee
                {elemento.github}
                </a>
              </li>
              <li>
<<<<<<< HEAD
                <a href={elemento.linkLi} target="_blank">
                  <img src={LinkedIn} className="imagensFooter" />
                  {elemento.linkedin}
                </a>
=======
                <img src={LinkedIn} alt="linkedin logo" className="imagensFooter" />
                {elemento.linkedin}
>>>>>>> 3612ba9c69ab095f3c9198cd1e0d801947535dee
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

