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
          id:1,
          nome: "Carla D'Abreu",
          linkedin: " /carladabreu",
          linkLi: "https://www.linkedin.com/in/carladabreu/",
          github: " /carlavieira",
          linkGit: "https://github.com/carlavieira",
          email: " carlaamvieira@gmail.com"
        },
        {
          id:2,
          nome: "Gabriel Lopes",
          linkedin: " /GabielLopesFerreira",
          linkLi: "https://www.linkedin.com/in/GabrielLopesFerreira/",
          github: " /lope3x",
          linkGit: "https://github.com/lope3x",
          email: " glf7655@gmail.com"
        },
        {
          id:3,
          nome: "Luiz Gustavo Torres",
          linkedin: " /torresluizg",
          linkLi: "https://www.linkedin.com/in/torresluizg/",
          github: " /torresluizg",
          linkGit: "https://github.com/torresluizg",
          email: " torresluizgtech@gmail.com"
        },
        {
          id:4,
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
          <div className="controleDeVisao" key={elemento.id}>
            <ul className="nomeTime">
              <li>{elemento.nome}</li>
              <li>
                <a href={elemento.linkGit} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                <img src={Github} alt="git logo" className="imagensFooter" />
                {elemento.github}
                </a>
              </li>
              <li>
                <a href={elemento.linkLi} target="_blank" rel="noopener noreferrer">
                  <img src={LinkedIn} alt="linkedin logo" className="imagensFooter" />
                  {elemento.linkedin}
                </a>
              </li>
              <li>
                <img src={Mail} alt="email logo" className="imagensFooter" />
                {elemento.email}
              </li>
            </ul>
          </div>
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

