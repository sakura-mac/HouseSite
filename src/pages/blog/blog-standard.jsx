import React from 'react';
import BlogSideBar from '../../componets/blog/BlogSideBar';
import { Link } from 'react-router-dom';
import Layout from '../../layouts';
import { Container, Row, Col } from 'react-bootstrap';

class BlogStandard extends React.Component {


    render() { 
        return ( 
          <Layout>
            <div className="page-title-area">
              <Container>
                <Row>
                  <Col lg="12">
                    <div className="page-title-item text-center">
                      <h2 className="title">News Standard</h2>
                      <nav aria-label="breadcrumb">

                      
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to={"/"}>Home </Link>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page">
                          News
                          </li>
                        </ol>
                      </nav>
                    </div>
                    {/* page title */}
                  </Col>
                </Row>
                {/* row */}
              </Container>
              {/* container */}
            </div>
          <div>
          <BlogSideBar/>
        </div>;
      </Layout>
    );
  }
}
 
export default BlogStandard;