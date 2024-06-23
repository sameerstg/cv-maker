"use client";
import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import Link from "next/link";
import SignInBtn from "../SignInBtn";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // Navbar Code
  render() {
    return (
      <nav className="NavbarItems">
        <a href="/">
          <h1 className="navbar-logo font-bold">Auto Cv Maker</h1>
        </a>
        <div className="menu-icons" onClick={this.handleClick}>
          {/*if bar icon clicked show close icon */}
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        {/* ul list From Here */}
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                {/* For react Dom using Link */}
                <Link className={item.cName} href={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>

              </li>
            );
          })}
        </ul>
        <SignInBtn />
      </nav>
    );
  }
}

export default Navbar;
