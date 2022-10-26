import React from "react";
import { Container, Navbar, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./Seosonoffers.css";

function Seosonoffers() {
  return (
    <div className="Seosonoffers">
      {/* <Navbar expand="lg" bg="dark" style={{ height: "5rem" }}>
        <Navbar.Brand
          href="/"
          className="logo"
          style={{ marginBottom: "1rem", marginLeft: "13rem" }}
        >
          LOGO
        </Navbar.Brand>
      </Navbar> */}
      <div className="seosonimg"></div>
      <div className="seosondetails">
        <Container>
          <Row >
            <h5>OFFER DETAILS:</h5>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Offer Details</th>
                  <th>minimum Transaction value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Domestic Flights</td>
                  <td>FLAT Rs.700 Instant Discount*</td>
                  <td>Rs.5,000</td>
                </tr>
                <tr>
                  <td>Domestic Hotels & Homestays</td>
                  <td>FLAT Rs.350 Instant Discount*</td>
                  <td>Rs.3,000</td>
                </tr>
                <tr>
                  <td>Bus</td>
                  <td>FLAT Rs.100 Instant Discount*</td>
                  <td>Rs.750</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Seosonoffers;
