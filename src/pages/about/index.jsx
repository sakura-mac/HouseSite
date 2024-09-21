import React from 'react';
import { Link } from 'react-router-dom';
import AboutExperiencePart from '../../componets/aboutExperiencePart/Index';
import AboutIntroPart from '../../componets/aboutIntroPart/Index';
import AbotFaqPart from '../../componets/abotFaqPart/Index';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../layouts';
import PlayVideoControl from "../../componets/PlayVideoControl/PlayVideoControl";
import AboutIntroVideoPart from "../../componets/aboutIntroVideoPart/Index";
import AboutHistoryPart from "../../componets/aboutHistoryPart/Index";

class AboutPage extends React.Component {
  render() {
    return (
        <React.Fragment>
          {/* 包裹 PlayVideoControl 和 Layout */}
          <PlayVideoControl videoSrc="assets/videos/SwallowHome2.mp4" />
          <Layout>
            <div className="page-title-area">
              <Container>
                <Row>
                  <Col lg="12">
                    <div className="page-title-item text-center">
                      <h2 className="title">关于我们</h2>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to={'index'}>Home</Link>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page">
                            About
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
            {
              /*====== PAGE TITLE PART ENDS ======*/
            }

            {/* 其他组件 */}
            <AboutExperiencePart />
            <AboutIntroPart />
            <AboutIntroVideoPart />
            {/*<AboutHistoryPart />*/}
            {/*<AbotFaqPart />*/}
          </Layout>
        </React.Fragment>
    );
  }
}

export default AboutPage;
