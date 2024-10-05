import React from 'react';
import BlogDetailsSideBar from '../../componets/blog/BlogDetailsSideBar';
import { Link } from 'react-router-dom';
import Layout from '../../layouts';
import { Container, Row, Col } from 'react-bootstrap';

class BlogDetails extends React.Component {

    render() { 
        return ( 
          <Layout>
            <div className="page-title-area">
              <Container>
                <Row>
                  <Col lg="12">
                    <div className="page-title-item text-center">
                      <h2 className="title"><br />新闻中心</h2>
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
            {
              /*====== PAGE TITLE PART ENDS ======*/
            }

            {
              /*====== BLOG STANDARD PART START ======*/
            }
            <div className="blog-standard-area pt-90 pb-120">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <div className="blog-standard">
                      <div className="single-blog-standard  mt-30">
                        <div className="blog-dteails-content blog-border">
                          <div className="blog-details-top">
                            <span>Businese</span>
                            <h2 className="title">
                              In reprehenderit in voluptate velit esse cillum dolore eu
                              fugiat nulla pariatur.
                            </h2>
                            <ul>
                              <li>
                                <i className="fal fa-eye" /> 232 Views
                              </li>
                              <li>
                                <i className="fal fa-comments" /> 35 Comments
                              </li>
                              <li>
                                <i className="fal fa-calendar-alt" /> 24th March 2019
                              </li>
                            </ul>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam, quis nostrud exercitation ullamco
                              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit esse cillum
                              dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                              cupidatat non proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum. Sed ut perspiciatis unde omnis
                              iste natus error sit voluptatem accusantium doloremque
                              laudantium, totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae vitae dicta
                              sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit, sed quia consequuntur magni
                              dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                              quisquam est, qui dolorem ipsum quia dolor sit amet,
                              consectetur, adipisci velit, sed quia non numquam eius modi
                              tempora incidunt ut labore et dolore magnam aliquam quaerat
                              voluptatem.
                            </p>
                            <p className="mt-m2">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam, quis nostrud exercitation ullamco
                              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit esse cillum
                              dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                              cupidatat non proident, sunt in culpa qui officia deserunt.
                            </p>
                          </div>
                          <div className="blog-details-bath">
                            <img
                              src="assets/images/blog-details-thumb.jpg"
                              alt="blog-details"
                            />
                            <h4 className="title">Setting the mood with incense</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                              do eiusmod tempor incidi-dunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on
                              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                              aute irure dolor in repre-henderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur sint
                              occaecat cupidatat non proident, sunt in culpa qui officia.
                            </p>
                            <h4 className="title">A cleansing hot shower or bath</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                              do eiusmod tempor incidi-dunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on
                              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                              aute irure dolor in repre-henderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur sint
                              occaecat cupidatat non proident, sunt in culpa qui officia.
                            </p>
                            <h4 className="title">Setting the mood with incense</h4>
                            <ul>
                              <li>
                                <i className="fal fa-check" /> Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do.
                              </li>
                              <li>
                                <i className="fal fa-check" /> Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do.
                              </li>
                              <li>
                                <i className="fal fa-check" /> Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do.
                              </li>
                              <li>
                                <i className="fal fa-check" /> Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do.
                              </li>
                              <li>
                                <i className="fal fa-check" /> Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do.
                              </li>
                            </ul>
                          </div>
                          <div className="blog-details-quote text-center mt-30 mb-30">
                            <p>
                              <span>by</span> Hetmayar
                            </p>
                            <h3 className="title">
                              Viral dreamcatcher keytar typewriter, aesthetic offal umami.
                              Aesthetic polaroid pug pitchfork post-ironic.
                            </h3>
                            <i className="fas fa-quote-left" />
                          </div>
                          <div className="blog-details-confarance">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam, quis nostrud exercitation ullamco
                              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit esse cillum
                              dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                              cupidatat non proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum. Sed ut perspiciatis unde omnis
                              iste natus error sit voluptatem.
                            </p>
                            <div className="confarance-flex d-flex mt-20 mb-20">
                              <div className="confarance-thumb-1">
                                <img src="assets/images/confarance.jpg" alt="" />
                              </div>
                              <div className="confarance-thumb-2">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                  sed do eiusmod tempor incididunt ut labore et dolore magna
                                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                  Duis aute irure dolor in reprehenderit in voluptate velit
                                  esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                  sint occaecat cupidatat non proident, sunt in culpa qui
                                  officia deserunt mollit anim id est laborum. Sed ut
                                  perspiciatis unde omnis iste natus error sit .
                                </p>
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam, quis nostrud exercitation ullamco
                              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit esse cillum
                              dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                              cupidatat non proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum. Sed ut perspiciatis unde omnis
                              iste natus error sit voluptatem.
                            </p>
                          </div>
                          <div className="blog-details-bar d-flex justify-content-between mt-40 mb-50">
                            <div className="blog-tags">
                              <h4 className="title">Releted Tags</h4>
                              <ul>
                                <li>
                                  <Link  to={"blog"}>Popular</Link>
                                </li>
                                <li>
                                  <Link  to={"blog"}>desgin</Link>
                                </li>
                                <li>
                                  <Link  to={"blog"}>ux</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="blog-social text-right">
                              <h4 className="title">Social Share</h4>
                              <ul>
                                <li>
                                  <Link  to={"/"}>
                                    <i className="fab fa-facebook-f" />
                                  </Link>
                                </li>
                                <li>
                                  <Link  to={"/"}>
                                    <i className="fab fa-twitter" />
                                  </Link>
                                </li>
                                <li>
                                  <Link  to={"/"}>
                                    <i className="fab fa-typo3" />
                                  </Link>
                                </li>
                                <li>
                                  <Link  to={"/"}>
                                    <i className="fab fa-staylinked" />
                                  </Link>
                                </li>
                                <li>
                                  <Link  to={"/"}>
                                    <i className="fab fa-tumblr" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/*<div className="blog-details-next-prev d-flex justify-content-between pt-45 pb-45">*/}
                          {/*  <div className="post-prev">*/}
                          {/*    <Link  to={"/"}>*/}
                          {/*      <span>Prev Post</span>*/}
                          {/*      <h4 className="title">Tips On Minimalist</h4>*/}
                          {/*    </Link>*/}
                          {/*  </div>*/}
                          {/*  <div className="post-next text-right">*/}
                          {/*    <Link  to={"/"}>*/}
                          {/*      <span>Next Post</span>*/}
                          {/*      <h4 className="title">Less Is More</h4>*/}
                          {/*    </Link>*/}
                          {/*  </div>*/}
                          {/*  <Link  to={"/"}>*/}
                          {/*    <img src="assets/images/dot-box.png" alt="" />*/}
                          {/*  </Link>*/}
                          {/*</div>*/}
                          {/*<div className="blog-details-releted-post mt-45">*/}
                          {/*  <h4 className="title">Releted Post</h4>*/}
                          {/*  <Row>*/}
                          {/*    <Col lg="6" md="6">*/}
                          {/*      <div className="blog-details-releted-item mt-30">*/}
                          {/*        <div className="releted-thumb">*/}
                          {/*          <img src="assets/images/releted-1.jpg" alt="" />*/}
                          {/*        </div>*/}
                          {/*        <div className="releted-content">*/}
                          {/*          <span>*/}
                          {/*            <i className="fal fa-calendar-alt" /> 24th March 2019*/}
                          {/*          </span>*/}
                          {/*          <Link  to={"/"}>*/}
                          {/*            <h4 className="title">*/}
                          {/*              A series of iOS 7 inspire vector icons sense.*/}
                          {/*            </h4>*/}
                          {/*          </Link>*/}
                          {/*          <p>*/}
                          {/*            Lorem ipsum dolor sit amet, conse ctet ur adipisicing*/}
                          {/*            elit, sed doing.*/}
                          {/*          </p>*/}
                          {/*        </div>*/}
                          {/*      </div>*/}
                          {/*    </Col>*/}
                          {/*    <Col lg="6" md="6">*/}
                          {/*      <div className="blog-details-releted-item mt-30">*/}
                          {/*        <div className="releted-thumb">*/}
                          {/*          <img src="assets/images/releted-2.jpg" alt="" />*/}
                          {/*        </div>*/}
                          {/*        <div className="releted-content">*/}
                          {/*          <span>*/}
                          {/*            <i className="fal fa-calendar-alt" /> 24th March 2019*/}
                          {/*          </span>*/}
                          {/*          <Link  to={"/"}>*/}
                          {/*            <h4 className="title">*/}
                          {/*              A series of iOS 7 inspire vector icons sense.*/}
                          {/*            </h4>*/}
                          {/*          </Link>*/}
                          {/*          <p>*/}
                          {/*            Lorem ipsum dolor sit amet, conse ctet ur adipisicing*/}
                          {/*            elit, sed doing.*/}
                          {/*          </p>*/}
                          {/*        </div>*/}
                          {/*      </div>*/}
                          {/*    </Col>*/}
                          {/*  </Row>*/}
                          {/*</div>*/}
                          {/*<div className="blog-details-written mt-50">*/}
                          {/*  <div className="written-area d-flex align-items-center">*/}
                          {/*    <div className="written-thumb">*/}
                          {/*      <img src="assets/images/writter.jpg" alt="" />*/}
                          {/*    </div>*/}
                          {/*    <div className="written-content">*/}
                          {/*      <span>Written by</span>*/}
                          {/*      <h4 className="title">Rosalina D. William</h4>*/}
                          {/*      <p>*/}
                          {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit,*/}
                          {/*        sed do eiusmod tempor incididunt ut labore et dolore magna*/}
                          {/*        aliqua. Ut enim ad minim veniam, quis nostrud exercitation*/}
                          {/*        is enougn for today.*/}
                          {/*      </p>*/}
                          {/*    </div>*/}
                          {/*  </div>*/}
                          {/*</div>*/}
                          {/*<div className="blog-details-comments mt-45">*/}
                          {/*  <h4 className="title">03 Comments</h4>*/}
                          {/*  <div className="blog-comments-area">*/}
                          {/*    <div className="d-flex justify-content-between align-items-start">*/}
                          {/*      <div className="blog-left">*/}
                          {/*        <h6 className="title">Rosalina Kelian</h6>*/}
                          {/*        <span>19th May 2018</span>*/}
                          {/*      </div>*/}
                          {/*      <div className="blog-right">*/}
                          {/*        <Link  to={"/"}>*/}
                          {/*          <i className="fal fa-reply" /> Reply*/}
                          {/*        </Link>*/}
                          {/*      </div>*/}
                          {/*    </div>*/}
                          {/*    <img src="assets/images/blog-cmnt-1.png" alt="" />*/}
                          {/*    <p>*/}
                          {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit,*/}
                          {/*      sed do eiusmod tempor incididunt ut labore et dolore magna*/}
                          {/*      aliqua. Ut enim ad minim veniam, quis nostrud exercitation*/}
                          {/*      ullamco laboris nisi ut aliquip ex ea commodo consequat.*/}
                          {/*    </p>*/}
                          {/*  </div>*/}
                          {/*  <div className="blog-comments-area ml-125">*/}
                          {/*    <div className="d-flex justify-content-between align-items-start">*/}
                          {/*      <div className="blog-left">*/}
                          {/*        <h6 className="title">Rosalina Kelian</h6>*/}
                          {/*        <span>19th May 2018</span>*/}
                          {/*      </div>*/}
                          {/*      <div className="blog-right">*/}
                          {/*        <Link  to={"/"}>*/}
                          {/*          <i className="fal fa-reply" /> Reply*/}
                          {/*        </Link>*/}
                          {/*      </div>*/}
                          {/*    </div>*/}
                          {/*    <img src="assets/images/blog-cmnt-2.png" alt="" />*/}
                          {/*    <p>*/}
                          {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit,*/}
                          {/*      sed do eiusmod tempor incididunt ut labore et dolore magna*/}
                          {/*      aliqua. Ut enim ad minim veniam, quis nostrud exercitation*/}
                          {/*      ullamco.*/}
                          {/*    </p>*/}
                          {/*  </div>*/}
                          {/*  <div className="blog-comments-area">*/}
                          {/*    <div className="d-flex justify-content-between align-items-start">*/}
                          {/*      <div className="blog-left">*/}
                          {/*        <h6 className="title">Rosalina Kelian</h6>*/}
                          {/*        <span>19th May 2018</span>*/}
                          {/*      </div>*/}
                          {/*      <div className="blog-right">*/}
                          {/*        <Link  to={"/"}>*/}
                          {/*          <i className="fal fa-reply" /> Reply*/}
                          {/*        </Link>*/}
                          {/*      </div>*/}
                          {/*    </div>*/}
                          {/*    <img src="assets/images/blog-cmnt-3.png" alt="" />*/}
                          {/*    <p>*/}
                          {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit,*/}
                          {/*      sed do eiusmod tempor incididunt ut labore et dolore magna*/}
                          {/*      aliqua. Ut enim ad minim veniam, quis nostrud exercitation*/}
                          {/*      ullamco laboris nisi ut aliquip ex ea commodo consequat.*/}
                          {/*    </p>*/}
                          {/*  </div>*/}
                          {/*</div>*/}
                          {/*<div className="blog-details-post-comments">*/}
                          {/*  <h4 className="title">Post Comment</h4>*/}
                          {/*  <div className="post-comments-area gray-bg">*/}
                          {/*    <form action="out">*/}
                          {/*      <div className="input-box mt-20">*/}
                          {/*        <textarea*/}
                          {/*          name="index"*/}
                          {/*          id="index"*/}
                          {/*          cols={30}*/}
                          {/*          rows={10}*/}
                          {/*          placeholder="Type your comments...."*/}
                          {/*          defaultValue={""}*/}
                          {/*        />*/}
                          {/*      </div>*/}
                          {/*      <div className="input-box mt-20">*/}
                          {/*        <input type="text" placeholder="Type your name...." />*/}
                          {/*      </div>*/}
                          {/*      <div className="input-box mt-20">*/}
                          {/*        <input type="email" placeholder="Type your email...." />*/}
                          {/*      </div>*/}
                          {/*      <div className="input-box mt-20">*/}
                          {/*        <input type="text" placeholder="Type your website...." />*/}
                          {/*      </div>*/}
                          {/*      <div className="input-box mt-20">*/}
                          {/*        <button className="main-btn">*/}
                          {/*          <i className="fal fa-comments" />*/}
                          {/*          Post Comment*/}
                          {/*        </button>*/}
                          {/*      </div>*/}
                          {/*    </form>*/}
                          {/*  </div>*/}
                          {/*</div>*/}
                        </div>
                      </div>
                    </div>
                  </Col>
                {/*<BlogDetailsSideBar/>*/}
            </Row>
          </Container>
        </div>
        </Layout>
         );
    }
}
 
export default BlogDetails;