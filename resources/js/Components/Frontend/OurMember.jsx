import { Link } from '@inertiajs/react';
import '../../../css/our-member.css'
import avat1 from '../../../assets/all-images/ava-1.jpg'
import avat2 from '../../../assets/all-images/ava-2.jpg'
import avat3 from '../../../assets/all-images/ava-3.jpg'
import avat4 from '../../../assets/all-images/ava-4.jpg'
import { Col } from 'react-bootstrap';

const OurMemberData = [
    {
        name: "John Deo",
        experience: "5 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twtUrl: "#",
        linkinUrl: "#",
        imgUrl: avat1
    },
    {
        name: "Leo Messi",
        experience: "2 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twtUrl: "#",
        linkinUrl: "#",
        imgUrl: avat2
    },
    {
        name: "Johnathon",
        experience: "10 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twtUrl: "#",
        linkinUrl: "#",
        imgUrl: avat3
    },
    {
        name: "Chris Deo",
        experience: "6 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twtUrl: "#",
        linkinUrl: "#",
        imgUrl: avat4
    }
];

const OurMember = () => {
    return (
        <>
            {
                OurMemberData.map((item, index) => (
                    <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
                        <div className="single__member">
                            <div className="single__member-img">
                                <img src={item.imgUrl} alt="" className='w-100' />
                                <div className="single__member-social">
                                    <Link to={item.fbUrl}>
                                        <i className="ri-facebook-line"></i>
                                    </Link>
                                    <Link to={item.instUrl}>
                                        <i className="ri-instagram-line"></i>
                                    </Link>
                                    <Link to={item.twtUrl}>
                                        <i className="ri-twitter-line"></i>
                                    </Link>
                                    <Link to={item.linkinUrl}>
                                        <i className="ri-linkedin-line"></i>
                                    </Link>
                                </div>
                            </div>

                            <h6 className='text-center mb-0 mt-3'>{item.name}</h6>
                            <p className='section__description text-center'>{item.experience}</p>
                        </div>
                    </Col>
                ))
            }
        </>
    )
}

export default OurMember