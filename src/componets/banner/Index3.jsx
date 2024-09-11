import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class Banner extends React.Component {

  render() { 
    return ( 
      <div className="banner-area-2 bg_cover" style={{backgroundImage: `url(${process.env.PUBLIC_URL}'/assets/images/banner-bg.jpg')`}}>
        <div className="banner-overlay">
          <Container>
            <Row className="justify-content-center">
              <Col lg="6">
                <div className="banner-content text-center">
                  <span>Get Quality Item &amp; Goods</span>
                  <h1 className="title">IT Solutions</h1>
                  <p>Make your products with good &amp; professionals</p>
                  <ul>
                    <li>
                      <Link className="main-btn wow fadeInUp" to={"/"} data-wow-duration=".3s" data-wow-delay=".5s" style={{visibility: 'hidden', animationDuration: '0.3s', animationDelay: '0.5s', animationName: 'none'}}>
                        Get A Quote
                      </Link>
                    </li>
                    <li><Link className="main-btn main-btn-2 wow fadeInUp" to={"/"} data-wow-duration=".7s" data-wow-delay=".7s" style={{visibility: 'hidden', animationDuration: '0.7s', animationDelay: '0.7s', animationName: 'none'}}>Learn More</Link></li>
                  </ul>
                </div> 
              </Col>
            </Row> 
          </Container> 
        </div>
      </div>
    );
  }
}
 
export default Banner;