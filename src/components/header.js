import React from 'react';
import './header.css';
class Header extends React.Component {
  render(){
    return(
      <div>
        <div className="header">
          <div className="links">
          <a className="linksExternos" href="https://github.com/danwhat/codenation-central-de-erros">GitHub</a>
          <a className="linksExternos" href="/Doc">Doc. Swagger</a>
          <a className="linksExternos" href="https://contaazul.com">Sobre nós</a>
          </div>
        </div>
      </div>
    )
  }

}

export default Header;
  /*</div>      <div className="header">
          <Link to="/contaAzul">
            <img src={ logoContaAzul } />
          </Link>
          <div className="link">
            <a className="linksExternos" href="/gitHub">GitHub</a>
            <a className="linksExternos" href="/Doc">Doc. Swagger</a>
            <a className="linksExternos" href="/about">Sobre nós</a>
          </div>
        </div>*/