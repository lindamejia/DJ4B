import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import style from "./Contact.module.css"

class Contact extends Component {
render() {
return (
<div className={style.contact} id="contact">
<Container style={{ textAlign: "center" }} >
<Row>
<Col md={6}>
<a name="contact"></a>
<h3>MANAGEMENT</h3>
<a href="mailto:hrh@halembiz.com">hrh@halembiz.com</a>
<br/>
<a href="mailto:erin.lee@halembiz.com">erin.lee@halembiz.com</a>
</Col>

<Col md={6}>
<h3>BOOKINGS</h3>
<a class="two" href="mailto:agary@the.team">
agary@the.team{" "}
</a>
<br/>
<a class="two" href="mailto:abby.ellis@the.team">
abby.ellis@the.team{" "}
</a>
</Col>
</Row>
</Container>
<br/>
<p>Copyright © 2025 4B Touring LLC</p>
</div>
);
}
}

export default Contact;
