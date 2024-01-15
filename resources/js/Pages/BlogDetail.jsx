import Footer from '@/Components/Frontend/Footer';
import Header from '@/Components/Frontend/Header';
import { Head,Link } from '@inertiajs/react';
import {useEffect} from 'react'
import NavLink from '@/Components/NavLink';
import blogData from '../../assets/data/blogData'
import commentimg  from '../../assets/all-images/ava-1.jpg'
import '../../css/blog-details.css'
import { Container,Row,Col,Form,FormGroup } from 'react-bootstrap';
const BlogDetail = ({ slug }) => {
  const blog = blogData.find(item => item.slug == slug)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog])

  return (
    <>
      <Head title={blog.title} />
      <Header />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} className="w-100" alt="" />
                <h2 className="section__title mt-4">{blog.title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i className='ri-user-line'></i> {blog.author}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className='ri-calender-line'></i> {blog.date}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className='ri-time-line'></i> {blog.time}
                  </span>
                </div>

                <p className="section__description">{blog.description}</p>
              </div>

              <div className="comment__list mt-5">
                <h4 className='mb-5'>3 Comments</h4>
                <div className='single__comment d-flex gap-3'>
                  <img src={commentimg} alt="comment imge" />
                  <div className="comment__content">
                    <h6 className='fw-bold'>David</h6>
                    <p className="section__description mb-0">20 July, 2022</p>
                    <p className="section__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem non ut ad reprehenderit aperiam, quam consequuntur quae repudiandae atque voluptatibus?</p>
                    <span className='replay d-flex align-items-center gap-1'>
                      <i className='ri-reply-line'></i> Reply
                    </span>
                  </div>
                </div>

                <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="section__description">You must sign in to make or comment a post</p>

                  <Form>
                    <FormGroup className='d-flex gap-3'>
                      <input type="text" placeholder='Full name' className='form-control mb-2' />
                      <input type="email" placeholder='Email' className='form-control mb-2' />
                    </FormGroup>
                    <FormGroup>
                      <textarea cols="30" className='form-control w-100 py-2 px-3' placeholder='comment....'></textarea>
                    </FormGroup>
                    <button type='submit' className='btn comment__btn mt-3'>Post a Comment</button>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h2 className="fw-bold">Recent Post</h2>
              </div>
              {
                blogData.slice(0, 5).map((item) => (
                  <div className="recent__blog-post mb-4" key={item.id}>
                    <div className="recent__blog-item d-flex gap-3">
                      <img src={item.imgUrl} className="w-25 rounded-2" alt="" />
                      <h6>
                      <NavLink href={route('front.blog.detail',item.slug)} active={route().current('front.blog.detail')}>
                    {item.title}
                </NavLink>
                      </h6>
                    </div>
                  </div>
                ))
              }
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>

  )
}

export default BlogDetail