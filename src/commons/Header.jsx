import React, { useState } from "react";
import "./Header.css";

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
                <a className="a-burguer a-conf" href="/Marketplace">Marketplace</a>
              </li>
              <li className="li-conf">
                <a className="a-burguer a-conf" href="/Rankings">Rankings</a>
              </li>
              <li className="li-conf">
                <a className="a-burguer a-conf" href="/Connect-a-wallet">Connect a wallet</a>
              </li>
            </ul>
          </div>
        )}     
      </div>
      {/* menu width > 836px */}
      <div id="menu-right">
        <ul className="ul-conf">
          <li className="li-conf">
            <a className="a-conf" href="/Marketplace">Marketplace</a>
          </li>
          <li className="li-conf">
            <a className="a-conf" href="/Rankings">Rankings</a>
          </li>
          <li className="li-conf">
            <a className="a-conf" href="/Connect-a-wallet">Connect a wallet</a>
          </li>
        </ul>
        <button id="sign-up-button">
          <img id="sign-up" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/user@2x.svg"/>
          <h5 className="h5-conf">Sign Up</h5>
        </button>
      </div>
    </header>
  );
}