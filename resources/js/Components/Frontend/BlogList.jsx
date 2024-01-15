import { Link } from '@inertiajs/react';
import Col from 'react-bootstrap/Col';
import '../../../css/blog-list.css'
import NavLink from '@/Components/NavLink';
import BlogData from '../../../assets/data/blogData'
const BlogList = () => {
    return (
        <>
            {
                BlogData.map((item) => (
                    <BlogItem item={item} key={item.id} />
                ))
            }
        </>
    )
}
const BlogItem = ({ item }) => {
    const { imgUrl, title, slug, author, date, description, time } = item

    return <Col lg="4" md="4" sm="6" className='blog__item__boxs'>
        <div className="blog__item">
            <img src={imgUrl} alt="" className='w-100' />
            <div className="blog__info">
                <NavLink fromClass='blog__title'  href={route('front.blog.detail',{slug})} active={route().current('front.blog.detail')}>
                    {title}
                </NavLink>
                <p className="section__description">
                    {
                        description.length > 100 ? description.substr(0, 100) : description
                    }
                </p>
                <NavLink fromClass="read__more-btn" href={route('front.blog.detail',{slug})} active={route().current('front.blog.detail')}>
                    Read More
                </NavLink>

                <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
                    <span className="blog__author">
                        <i className='ri-user-line'></i> {author}
                    </span>

                    <div className="d-flex align-items-center gap-3">
                        <span className="d-flex align-items-center gap-1 section__description">
                            <i className='ri-calender-line'></i> {date}
                        </span>
                        <span className="d-flex align-items-center gap-1 section__description">
                            <i className='ri-time-line'></i> {time}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Col>
}
export default BlogList