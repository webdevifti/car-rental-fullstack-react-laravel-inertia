import {Link} from '@inertiajs/react';
import '../../../css/about-section.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImg from '../../../assets/all-images/cars-img/bmw-offer.png';

const AboutSection = ({aboutClass}) => {
  return (
    <section className='about__section' style={aboutClass == "aboutPage" ? { marginTop: "0px" } : { marginTop: "280px" }}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugit eos veritatis quia eius iusto, quod natus atque aliquam ut, est quo nemo ipsa architecto enim numquam dignissimos, incidunt et. Ipsum, odit, animi sequi deleniti expedita tempore mollitia quas, maxime exercitationem commodi minima voluptatibus modi sit accusamus quasi labore dolorum!</p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet consectetur.
                </p>

              </div>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet consectetur.
                </p>

              </div>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet consectetur.
                </p>

              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="About Image" className='w-100' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutSection