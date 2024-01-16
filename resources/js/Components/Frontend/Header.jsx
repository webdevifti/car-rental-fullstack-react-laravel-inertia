import { Link } from '@inertiajs/react';
import { useRef } from 'react';
import NavLink from '@/Components/NavLink';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../css/header.css'

const Header = () => {
    const menuRef = useRef(null)

    const toggleMenu = () => menuRef.current.classList.toggle('menu__active')
    return (
        <header className='header'>
            <div className='header__top'>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <div className='header__top__left'>
                                <span>Need Help?</span>
                                <span className='header__top__help'>
                                    <i className='ri-phone-fill'></i> +880123456789
                                </span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6">
                            <div className='header__top__right d-flex align-items-center justify-content-end gap-3'>

                                <NavLink classFrom="d-flex align-items-center gap-1" href={route('login')} active={route().current('login')}>
                                    <i className='ri-login-circle-line'></i> Login
                                </NavLink>
                                <NavLink classFrom="d-flex align-items-center gap-1" href={route('register')} active={route().current('register')}>
                                    <i className='ri-login-circle-line'></i> Register
                                </NavLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="header__middle">
                <Container>
                    <Row>
                        <Col lg="4" md="3" sm="4">
                            <div className="logo">
                                <h1>
                                    <Link to="/" className='d-flex align-items-center gap-3'>
                                        <i className='ri-car-line'></i>
                                        <span>Rent Car <br /> Service</span>
                                    </Link>
                                </h1>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="4">
                            <div className="header__location d-flex align-items-center gap-2">
                                <span><i className='ri-earth-line'></i></span>
                                <div className="header__location-content">
                                    <h4>Bangladesh</h4>
                                    <h6>Dhaka City, Bangladesh</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="4">
                            <div className="header__location d-flex align-items-center gap-2">
                                <span><i className='ri-time-line'></i></span>
                                <div className="header__location-content">
                                    <h4>Sunday to Friday</h4>
                                    <h6>10am - 8pm</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg="2" md="3" sm="0" className='d-flex align-items-center justify-content-end text-end'>
                            <button className="header__btn btn ">
                                <NavLink href={route('front.contact')} active={route().current('front.contact')}>
                                    <i className='ri-phone-line'></i>Request a call
                                </NavLink>

                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="main__navbar">
                <Container>
                    <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                        <span className='mobile__menu'>
                            <i className='ri-menu-line' onClick={toggleMenu}></i>
                        </span>
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <div className="menu">
                                <NavLink href={route('front.home')} active={route().current('front.home')}>
                                    Home
                                </NavLink>
                                <NavLink href={route('front.car')} active={route().current('front.car')}>
                                    Cars
                                </NavLink>
                                <NavLink href={route('front.blog')} active={route().current('front.blog')}>
                                    Blog
                                </NavLink>
                                <NavLink href={route('front.about')} active={route().current('front.about')}>
                                    About
                                </NavLink>
                                <NavLink href={route('front.contact')} active={route().current('front.contact')}>
                                    Contact
                                </NavLink>
                              
                            </div>
                        </div>
                        <div className="nav__right">
                            <div className="search__box">
                                <input type="text" placeholder='Search..' />
                                <span>
                                    <i className='ri-search-line'></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    )
}

export default Header