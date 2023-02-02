import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { FcLike } from "react-icons/fc";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className='footer'>
        <Container fluid>
          <Row>
            <Col sm={6}>{new Date().getFullYear()} © Demo Template.</Col>
            <Col sm={6}>
              <div className='text-sm-end d-none d-sm-block text-center'>
                Design & Develop by Demotemplate <FcLike />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
