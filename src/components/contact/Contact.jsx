import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import style from "./Contact.module.css"

class Contact extends Component {
  render() {
    return (
      <div className={style.contact} id="contact">
      <Container >
        <Row>
          <Col md={4}>
            <a name="contact"></a>
            <h3>MANAGEMENT</h3>
            <a href="mailto:4B@ymugroup.com">4B@ymugroup.com</a>
          </Col>

          <Col md={4}>
            <h3>BOOKINGS</h3>
            <h4>USA</h4>
            <br />
            <a class="two" href="mailto:agary@paradigmagency.com">
              agary@paradigmagency.com{" "}
            </a>
          </Col>

          <Col md={4}>
            <h4>GLOBAL</h4>
            <br />
            <a class="three" href="mailto:paul@primarytalent.com">
              paul@primarytalent.com{" "}
            </a>
          </Col>
        </Row>
<Row style={{ textAlign: "center" }}><p>Copyright © 2022 4B Touring LLC</p></Row>
      </Container>
      </div>
    );
  }
}

export default Contact;
