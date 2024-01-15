import { Link } from '@inertiajs/react';
import '../../../css/testimonial.css'
import Slider from 'react-slick'
import avatar1 from '../../../assets/all-images/ava-1.jpg'
import avatar2 from '../../../assets/all-images/ava-2.jpg'
import avatar3 from '../../../assets/all-images/ava-3.jpg'
import avatar4 from '../../../assets/all-images/ava-4.jpg'

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        swipeToSlide: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            }
        ]
    }
    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo deserunt hic modi ex, reprehenderit explicabo natus! Provident dicta aperiam reprehenderit.
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={avatar1} alt="" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className="mb-0 mt-3">John Deo</h6>
                        <p className='section__description'>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo deserunt hic modi ex, reprehenderit explicabo natus! Provident dicta aperiam reprehenderit.
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={avatar2} alt="" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className="mb-0 mt-3">John Deo</h6>
                        <p className='section__description'>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo deserunt hic modi ex, reprehenderit explicabo natus! Provident dicta aperiam reprehenderit.
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={avatar3} alt="" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className="mb-0 mt-3">John Deo</h6>
                        <p className='section__description'>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo deserunt hic modi ex, reprehenderit explicabo natus! Provident dicta aperiam reprehenderit.
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={avatar4} alt="" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className="mb-0 mt-3">John Deo</h6>
                        <p className='section__description'>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonial