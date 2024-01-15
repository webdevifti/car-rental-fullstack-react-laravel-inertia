import { Link } from '@inertiajs/react';
import '../../../css/footer.css'
import NavLink from '@/Components/NavLink';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';


const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4" md="4" sm="12">
                        <div className="logo footer__logo">
                            <h1>
                                <Link to="/home" className='d-flex align-items-center gap-3'>
                                    <i className='ri-car-line'></i>
                                    <span>Rent Car <br /> Service</span>
                                </Link>
                            </h1>
                        </div>
                        <p className="footer__logo-content">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui, ipsum quia laborum animi vel, quasi sit atque ipsam officiis asperiores repudiandae. Cumque incidunt, consequatur minus repellendus harum earum, cum eum fuga dolorum fugiat ab, aut doloremque ad a vitae?
                        </p>
                    </Col>
                    <Col lg="2" md="4" sm="6">
                        <div className="mb-4">
                            <h5 className='footer__link-title'>Quick Links</h5>
                            <ListGroup>
                                <ListGroupItem className="p-0 mt-3 quick__link">
                                    <NavLink href={route('front.about')} active={route().current('front.about')}>
                                        About
                                    </NavLink>
                                </ListGroupItem>
                                <ListGroupItem className="p-0 mt-3 quick__link">
                                    <NavLink href={route('front.contact')} active={route().current('front.contact')}>
                                        Contact
                                    </NavLink>
                                </ListGroupItem>
                                <ListGroupItem className="p-0 mt-3 quick__link">
                                    <NavLink href={route('front.car')} active={route().current('front.car')}>
                                        Cars
                                    </NavLink>
                                </ListGroupItem>
                                <ListGroupItem className="p-0 mt-3 quick__link">
                                    <NavLink href={route('front.privacypolicy')} active={route().current('front.privacypolicy')}>
                                        Privacy & Policy
                                    </NavLink>
                                </ListGroupItem>
                                <ListGroupItem className="p-0 mt-3 quick__link">
                                    <NavLink href={route('front.termscondition')} active={route().current('front.termscondition')}>
                                        Terms & Conditions
                                    </NavLink>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <div className="mb-4">
                            <h5 className='footer__link-title mb-4'>Head Office</h5>
                            <p className="office__info">123 Dhanmondi, Dhaka, Bangladesh</p>
                            <p className="office__info">Phone: +880123456789</p>
                            <p className="office__info">Email: contact@example.com</p>
                            <p className="office__info">Office Time: 10am - 8pm</p>
                        </div>
                    </Col>
                    <Col lg="3" md="4">
                        <div className="mb-4">
                            <h5 className='footer__link-title mb-4'>Newsletter</h5>
                            <p className="section__description">Subscribe our newsletter</p>
                            <div className="newsletter">
                                <input type="email" placeholder='Email' />
                                <span>
                                    <i className='ri-send-plane-line'></i>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col lg="12">
                        <div className="footer__bottom">
                            <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-2">
                                <i className="ri-copyright-line"></i> Copyright {year}, Developed By webdevifti. All rights reserved.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer