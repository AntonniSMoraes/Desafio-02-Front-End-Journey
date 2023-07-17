import React, { useState } from "react";
import "./Header.css";
import {Link} from 'react-router-dom';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  const handleMouseLeave = () => {
    if(isActive==true)setIsActive(false);
  }

  return (
    <header>
      <a className="a-conf" id="logo" href="/">
        <img className="logo" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront@2x.svg" />
        <h3>NFT Marketplace</h3>
      </a>
      {/* menu width > 385px */}
      <div id="burguer">
        <button className={isActive ? "rotate active" : "rotate"} onClick={handleButtonClick}>
          <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/burger-menu-@2x.svg" />
        </button>
        {isActive && (
          <div className={`overlay ${isActive ? "active" : ""}`} onMouseLeave = {handleMouseLeave}>
            <ul className="burguer-itens ul-conf">
              <li className="li-conf">
                <Link className="a-burguer a-conf" to="/marketplace">Marketplace</Link>
              </li>
              <li className="li-conf">
                <Link className="a-burguer a-conf" to="/rankings">Rankings</Link>
              </li>
              <li className="li-conf">
                <a className="a-burguer a-conf" href="/connect-wallet">Connect a wallet</a>
              </li>
            </ul>
          </div>
        )}     
      </div>
      {/* menu width > 836px */}
      <div id="menu-right">
        <ul className="ul-conf">
          <li className="li-conf">
            <a className="a-conf" href="/marketplace">Marketplace</a>
          </li>
          <li className="li-conf">
            <a className="a-conf" href="/rankings">Rankings</a>
          </li>
          <li className="li-conf">
            <a className="a-conf" href="/connect-wallet">Connect a wallet</a>
          </li>
        </ul>
        <a href="/create-account"><button className="sign-up-button">
          <img id="sign-up" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/user@2x.svg"/>
          <h5 className="h5-conf">Sign Up</h5>
        </button>
        </a>
      </div>
    </header>
  );
}