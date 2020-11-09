import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import style from "./Merch.module.css";

export default class Merch extends Component {
  render() {
    return (
      <div id="merch" style={{ textAlign: "center", marginBottom: "30px" }}>
        <a href="https://4b.merchtable.com/" className={style.merch}>
          <h1 style={{ padding: " 30px 0px 30px 0px" }}>MERCH</h1>
        </a>
        <Container>
          <Row>
            <Col md={4}>
              <a
                href="https://4b.merchtable.com/apparel/original-iv-t-shirt-white"
                target="_blank"
              >
                <img
                  height="250"
                  src="https://s3.amazonaws.com/dev1.mtimg.com/product_photos/imgs/000/045/481/full/FB_LogoTWhite-1.png"
                />
                <h4 style={{ color: "black" }}>
                  Original "IV" T-Shirt (White)
                </h4>
                <h5 style={{ color: "black" }}>$5.00</h5>
              </a>
            </Col>
            <Col md={4}>
              <a
                href="https://4b.merchtable.com/apparel/original-iv-t-shirt-black"
                target="_blank"
              >
                <img
                  height="250"
                  src="https://s3.amazonaws.com/dev1.mtimg.com/product_photos/imgs/000/045/475/full/FB_LogoT-1.png"
                />
                <h4 style={{ color: "black" }}>
                  Original "IV" T-Shirt (Black)
                </h4>
                <h5 style={{ color: "black" }}>$5.00</h5>
              </a>
            </Col>
            <Col md={4}>
              <a
                href="https://4b.merchtable.com/apparel/original-iv-crop-fleece-crew-black"
                target="_blank"
              >
                <img
                  height="250"
                  src="https://s3.amazonaws.com/dev1.mtimg.com/product_photos/imgs/000/045/480/full/FB_LogCropT-1.png"
                />
                <h4 style={{ color: "black" }}>
                  Original "IV" Crop Fleece Crew (Black)
                </h4>
                <h5 style={{ color: "black" }}>$10.00</h5>
              </a>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <a
                href="https://4b.merchtable.com/accessories/iv-beanie-red"
                target="_blank"
              >
                <img
                  height="250"
                  src="https://s3.amazonaws.com/dev1.mtimg.com/product_photos/imgs/000/045/493/full/IV_BNI-1.png"
                />
                <h4 style={{ color: "black" }}>IV Beanie (Red)</h4>
                <h5 style={{ color: "black" }}>$10.00</h5>
              </a>
            </Col>
            <Col md={4}>
              <a
                href="https://4b.merchtable.com/accessories/4b-pop-socket"
                target="_blank"
              >
                <img
                  height="250"
                  src="https://s3.amazonaws.com/dev1.mtimg.com/product_photos/imgs/000/045/520/full/4B_PopSocket.png"
                />
                <h4 style={{ color: "black" }}>"4B" Pop Socket</h4>
                <h5 style={{ color: "black" }}>$5.00</h5>
              </a>
            </Col>
            <Col md={4}>
              <a
                href="https://4b.merchtable.com/accessories/iv-pop-socket"
                target="_blank"
              >
                <img
                  height="250"
                  src="https://s3.amazonaws.com/dev1.mtimg.com/product_photos/imgs/000/045/521/full/4B_IVPopSocket.png"
                />
                <h4 style={{ color: "black" }}>"IV" Pop Socket</h4>
                <h5 style={{ color: "black" }}>$5.00</h5>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
