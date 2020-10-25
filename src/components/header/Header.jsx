import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import logo from "../../images/logo.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import youtube from "../../images/youtube.png";
import twitter from "../../images/twitter.png";
import soundcloud from "../../images/soundcloud.png";
import style from "./Header.module.css";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
        <Navbar light expand="md" fixed="top" className={style.navbar}>
          <NavbarToggler onClick={this.toggle} className={style.toggler} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem className={style.nav}>
                <Link
                  className="reactscrollLink"
                  style={{ color: "black" }}
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  HOME
                </Link>
              </NavItem>
              <NavItem className={style.nav}>
                <Link
                  className="reactscrollLink"
                  style={{ color: "black" }}
                  activeClass="active"
                  to="tour"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  TOUR
                </Link>
              </NavItem>
              <NavItem className={style.nav}>
                <Link
                  className="reactscrollLink"
                  style={{ color: "black" }}
                  activeClass="active"
                  to="music"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  MUSIC
                </Link>
              </NavItem>
              <NavItem className={style.nav}>
                <Link
                  className="reactscrollLink"
                  style={{ color: "black" }}
                  activeClass="active"
                  to="merch"
                  spy={true}
                  smooth={true}
                  offset={2000}
                  duration={500}
                >
                  MERCH
                </Link>
              </NavItem>
              <NavItem className={style.nav}>
                <Link
                  className="reactscrollLink"
                  style={{ color: "black" }}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={2000}
                  duration={500}
                >
                  CONTACT
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarBrand className="d-lg-block">
            <img
              src={logo}
              alt="Logo"
              className={style.logo}
              onClick={this.scrollToTop}
            />
          </NavbarBrand>
          <div>
            <a href="https://www.facebook.com/LIKE4B/" target="_blank">
              <img src={facebook} className={style.socials} />
            </a>

            <a href="https://www.instagram.com/dj4b/" target="_blank">
              <img src={instagram} className={style.socials} />
            </a>

            <a
              href="https://www.youtube.com/user/THEREALDJ4B/videos"
              target="_blank"
            >
              <img src={youtube} className={style.socials} />
            </a>

            <a href="https://twitter.com/DJ4B" target="_blank">
              <img src={twitter} className={style.socials} />
            </a>

            <a href="https://soundcloud.com/dj4b" target="_blank">
              <img src={soundcloud} className={style.socials} />
            </a>

            <iframe
              src="https://embed.spotify.com/follow/1/?uri=spotify:artist:0LIl9fjMPEZp8UDiL8Yuo4&amp;size=basic&amp;theme=light&amp;show-count=0"
              width="100"
              height="25"
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
            ></iframe>
          </div>
        </Navbar>
      </>
    );
  }
}
