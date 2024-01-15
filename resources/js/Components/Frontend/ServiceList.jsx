import { Head } from '@inertiajs/react';
import Col from 'react-bootstrap/Col';
import '../../../css/service-list.css'
import serviceData from '../../../assets/data/serviceData'

const ServiceItem = ({ item }) => (
    <Col lg="4" md="4" sm="6" className='mb-3'>
        <div className="service__item">
            <span className='mb-3 d-inline-block'>
                <i className={item.icon} />
            </span>
            <h6>{item.title}</h6>
            <p className="section__description">{item.desc}</p>
        </div>
    </Col>
);
const ServiceList = () => {
    return <>
        {
            serviceData.map(item => (
                <ServiceItem item={item} key={item.id} />
            ))
        }
    </>
}


export default ServiceList