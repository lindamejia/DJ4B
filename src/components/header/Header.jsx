import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Col,
  Container,
  Row,
} from "reactstrap";
import logo from "../../images/logo.png";
import whiteLogo from "../../images/4bwhite.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import youtube from "../../images/youtube.png";
import twitter from "../../images/twitter.png";
import soundcloud from "../../images/soundcloud.png";
import facebookWhite from "../../images/facebookWhite.png";
import instagramWhite from "../../images/instagramWhite.png";
import youtubeWhite from "../../images/youtubeWhite.png";
import twitterWhite from "../../images/twitterWhite.png";
import soundcloudWhite from "../../images/soundcloudWhite.png";
import style from "./Header.module.css";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      color: "white",
      isOpen: false,
      logo: whiteLogo,
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

  listenScrollEvent = (e) => {
    var shadow = {
      boxShadow: "0px 0px 10px 0px rgba(50, 50, 50, 0.75)",
    };
    var clear = {
      boxShadow: "none",
    };
    if (window.scrollY > 400) {
      this.setState({
        color: "black",
        backgroundColor: "white",
        logo: logo,
        shadow: shadow,
      });
    } else {
      this.setState({
        color: "white",
        backgroundColor: "",
        logo: whiteLogo,
        shadow: clear,
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <>
        <Navbar
          color={this.state.backgroundColor}
          style={this.state.shadow}
          light
          expand="md"
          fixed="top"
          className={style.navbar}
        >
          <Container className="justify-content-center">
            <Col md={{ size: 5 }} xs={{ size: 6 }}>
              <NavbarToggler onClick={this.toggle} className={style.toggler} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem className={style.nav}>
                    <Link
                      className="reactscrollLink"
                      style={{ color: this.state.color }}
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
                      style={{ color: this.state.color }}
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
                      style={{ color: this.state.color }}
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
                      style={{ color: this.state.color }}
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
            </Col>
            <Col md={{ size: 2, offset: 2 }} xs={{ size: 3, offset: 3 }}>
              <NavbarBrand className="d-lg-block">
                <img
                  src={this.state.logo}
                  alt="Logo"
                  className={style.logo}
                  onClick={this.scrollToTop}
                />
              </NavbarBrand>
            </Col>
            <Col md={{ size: 5 }} xs={{ size: 12 }} className={style.socialsContainer}>
              {this.state.color === "white" ? (
                <div className={style.socialMedia}>
                  <a href="https://www.facebook.com/LIKE4B/" target="_blank">
                    <img src={facebookWhite} className={style.socials} />
                  </a>

                  <a href="https://www.instagram.com/dj4b/" target="_blank">
                    <img src={instagramWhite} className={style.socials} />
                  </a>

                  <a
                    href="https://www.youtube.com/user/THEREALDJ4B/videos"
                    target="_blank"
                  >
                    <img src={youtubeWhite} className={style.socials} />
                  </a>

                  <a href="https://twitter.com/DJ4B" target="_blank">
                    <img src={twitterWhite} className={style.socials} />
                  </a>

                  <a href="https://soundcloud.com/dj4b" target="_blank">
                    <img src={soundcloudWhite} className={style.socials} />
                  </a>
                </div>
              ) : (
                <div className={style.socialMedia}>
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
                </div>
              )}
            </Col>
          </Container>
        </Navbar>
      </>
    );
  }
}
