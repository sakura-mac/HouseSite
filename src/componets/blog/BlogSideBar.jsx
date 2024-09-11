import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class BlogSideBar extends React.Component {
  
    render() { 
        return ( 
          <div className="blog-standard-area pt-90 pb-120">
            <Container>
              <Row className="justify-content-center">
                <Col lg="8">
                  <div className="blog-standard">
                    <div className="single-blog-standard mt-30">
                      <div className="blog-standard-thumb">
                        <img src="assets/images/blog-standard-1.jpg" alt="blog" />
                      </div>
                      <div className="blog-standard-content">
                        <span>Businese</span>
                        <h2 className="title">
                          Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod
                          tempor.
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
                          do eiusmod tempor incidi-dunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore.
                        </p>
                        <div className="blog-flex">
                          <div className="blog-left">
                            <p>
                              <span>by</span> Hetmayar
                            </p>
                            <img src="assets/images/blog-girl.png" alt="" />
                          </div>
                          <div className="blog-right">
                            <Link  to={"blog"}>
                              <i className="fal fa-arrow-right" />
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-blog-standard mt-30">
                      <div className="blog-standard-thumb">
                        <img src="assets/images/blog-standard-3.jpg" alt="blog" />
                        <Link  className="video-popup" to={"http://bit.ly/2VuPnrx"}>
                          <i className="fas fa-play" />
                        </Link>
                      </div>
                      <div className="blog-standard-content">
                        <span>Businese</span>
                        <h2 className="title">
                          Adipisicing elit, sed do eiusmod tempor incididunt ut labore
                          et dolore.
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
                          do eiusmod tempor incidi-dunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore.
                        </p>
                        <div className="blog-flex">
                          <div className="blog-left">
                            <p>
                              <span>by</span> Hetmayar
                            </p>
                            <img src="assets/images/blog-girl.png" alt="" />
                          </div>
                          <div className="blog-right">
                            <Link  to={"blog"}>
                              <i className="fal fa-arrow-right" />
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-blog-standard mt-30">
                      <div className="blog-standard-thumb">
                        <img src="assets/images/blog-standard-2.jpg" alt="blog" />
                      </div>
                      <div className="blog-standard-content">
                        <span>Businese</span>
                        <h2 className="title">
                          Magna aliqua. Ut enim ad minim venia m, quis nostrud
                          exercitation ullamco
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
                          do eiusmod tempor incidi-dunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore.
                        </p>
                        <div className="blog-flex">
                          <div className="blog-left">
                            <p>
                              <span>by</span> Hetmayar
                            </p>
                            <img src="assets/images/blog-girl.png" alt="" />
                          </div>
                          <div className="blog-right">
                            <Link  to={"blog"}>
                              <i className="fal fa-arrow-right" />
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-blog-standard  mt-30">
                      <div className="blog-standard-content blog-border">
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
                          do eiusmod tempor incidi-dunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore.
                        </p>
                        <div className="blog-flex">
                          <div className="blog-left">
                            <p>
                              <span>by</span> Hetmayar
                            </p>
                            <img src="assets/images/blog-girl.png" alt="" />
                          </div>
                          <div className="blog-right">
                            <Link  to={"blog"}>
                              <i className="fal fa-arrow-right" />
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-blog-standard mt-30">
                      <div className="blog-standard-thumb">
                        <img src="assets/images/blog-standard-3.jpg" alt="blog" />
                      </div>
                      <div className="blog-standard-content">
                        <span>Businese</span>
                        <h2 className="title">
                          Magna aliqua. Ut enim ad minim venia m, quis nostrud
                          exercitation ullamco
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
                          do eiusmod tempor incidi-dunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore.
                        </p>
                        <div className="blog-flex">
                          <div className="blog-left">
                            <p>
                              <span>by</span> Hetmayar
                            </p>
                            <img src="assets/images/blog-girl.png" alt="" />
                          </div>
                          <div className="blog-right">
                            <Link  to={"blog"}>
                              <i className="fal fa-arrow-right" />
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-blog-standard mt-30">
                      <div className="blog-standard-thumb">
                        <img src="assets/images/blog-standard-2.jpg" alt="blog" />
                      </div>
                      <div className="blog-standard-content">
                        <span>Businese</span>
                        <h2 className="title">
                          Magna aliqua. Ut enim ad minim venia m, quis nostrud
                          exercitation ullamco
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
                          do eiusmod tempor incidi-dunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore.
                        </p>
                        <div className="blog-flex">
                          <div className="blog-left">
                            <p>
                              <span>by</span> Hetmayar
                            </p>
                            <img src="assets/images/blog-girl.png" alt="" />
                          </div>
                          <div className="blog-right">
                            <Link  to={"blog"}>
                              <i className="fal fa-arrow-right" />
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Row>
                    <Col lg="12">
                      <nav className="mt-60" aria-label="Page navigation example">
                        <ul className="pagination pagination-2 justify-content-center">
                          <li className="page-item">
                            <Link 
                              className="page-link d-none d-sm-inline-block"
                              to={"/home-1"}
                              tabIndex={-1}
                              aria-disabled="true"
                            >
                              <i className="far fa-chevron-double-left" />
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link  className="page-link active" to={"/"}>
                              01
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link  className="page-link" to={"/"}>
                              02
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link  className="page-link" to={"/"}>
                              03
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link  className="page-link" to={"/"}>
                              ...
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link  className="page-link" to={"/"}>
                              10
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link  className="page-link d-none d-sm-inline-block" to={"/"}>
                              <i className="far fa-chevron-double-right" />
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </Col>
                  </Row>
                </Col>
                <Col lg="4" md="6" sm="8">
                  <div className="blog-sidebar-area ml-20">
                    <div className="blog-sidebar-item mt-30">
                      <div className="sidebar-title">
                        <h4 className="title">About Me</h4>
                      </div>
                      <div className="sidebar-about-contnent text-center mt-35">
                        <img src="assets/images/blog-about.png" alt="" />
                        <h6 className="title">Rosalina D. Willaimson</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consecte-tur adipisicing elit, sed
                          do eiusmod tempor incididunt ut labore.
                        </p>
                        <ul>
                          <li>
                            <Link  to={"home-1"}>
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"home-1"}>
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"home-1"}>
                              <i className="fab fa-behance" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"home-1"}>
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"home-1"}>
                              <i className="fab fa-youtube" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-sidebar-item mt-30">
                      <div className="sidebar-title">
                        <h4 className="title">Search Objects</h4>
                      </div>
                      <div className="sidebar-search-item text-center mt-35">
                        <form action="index">
                          <div className="input-box">
                            <input type="text" placeholder="Search your keyword..." />
                            <button>
                              <i className="fal fa-search" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="blog-sidebar-item mt-30">
                      <div className="sidebar-title">
                        <h4 className="title">Popular Feeds</h4>
                      </div>
                      <div className="sidebar-feeds mt-45">
                        <div className="sidebar-feeds-item mt-30 pl-100">
                          <Link  to={"home-1"}>
                            <h4 className="title">
                              Lorem ipsum dolor sit cing elit, sed do.
                            </h4>
                          </Link>
                          <span>
                            <i className="fal fa-calendar-alt" />
                            24th March 2019
                          </span>
                          <img src="assets/images/feeds-1.png" alt="" />
                        </div>
                        <div className="sidebar-feeds-item mt-30 pl-100">
                          <Link  to={"home-1"}>
                            <h4 className="title">
                              Lorem ipsum dolor sit cing elit, sed do.
                            </h4>
                          </Link>
                          <span>
                            <i className="fal fa-calendar-alt" />
                            24th March 2019
                          </span>
                          <img src="assets/images/feeds-2.png" alt="" />
                        </div>
                        <div className="sidebar-feeds-item mt-30 pl-100">
                          <Link  to={"/home-1"}>
                            <h4 className="title">
                              Lorem ipsum dolor sit cing elit, sed do.
                            </h4>
                          </Link>
                          <span>
                            <i className="fal fa-calendar-alt" />
                            24th March 2019
                          </span>
                          <img src="assets/images/feeds-3.png" alt="" />
                        </div>
                        <div className="sidebar-feeds-item mt-30 pl-100">
                          <Link  to={"/home-1"}>
                            <h4 className="title">
                              Lorem ipsum dolor sit cing elit, sed do.
                            </h4>
                          </Link>
                          <span>
                            <i className="fal fa-calendar-alt" />
                            24th March 2019
                          </span>
                          <img src="assets/images/feeds-4.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="blog-sidebar-item mt-30">
                      <div className="sidebar-title">
                        <h4 className="title">Categories</h4>
                      </div>
                      <div className="sidebar-categories mt-35">
                        <ul>
                          <li>
                            <Link  to={"/home-1"}>
                              Business<span>26</span>
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>
                              Consultant<span>30</span>
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>
                              Creative<span>71</span>
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>
                              UI/UX<span>56</span>
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>
                              Technology<span>60</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-sidebar-item mt-30">
                      <div className="sidebar-title">
                        <h4 className="title">Never Miss News</h4>
                      </div>
                      <div className="sidebar-social text-center mt-35">
                        <ul>
                          <li>
                            <Link  to={"/home-1"}>
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>
                              <i className="fab fa-behance" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>
                              <i className="fab fa-pinterest" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-sidebar-item mt-30">
                      <div className="sidebar-title">
                        <h4 className="title">Twitter Feeds</h4>
                      </div>
                      <div className="sidebar-twitter-feeds mt-35">
                        <div className="sidebar-twitter-feeds-item">
                          <ul>
                            <li>
                              <Link  to={"/home-1"}>Rescue - #Gutenberg ready @ wordpress</Link>
                            </li>
                            <li>
                              <Link  to={"/home-1"}>Theme for Creative Bloggers available on</Link>
                            </li>
                            <li>
                              <Link  to={"/home-1"}>@ ThemeForest https://t.co/2r1POjOjgV</Link>
                            </li>
                            <li>
                              <Link  to={"/home-1"}>C… https://t.co/rDAnPyClu1</Link>
                            </li>
                          </ul>
                          <span>November 25, 2018</span>
                          <i className="fab fa-twitter" />
                        </div>
                        <div className="sidebar-twitter-feeds-item">
                          <ul>
                            <li>
                              <Link  to={"/home-1"}>Rescue - #Gutenberg ready @ wordpress</Link>
                            </li>
                            <li>
                              <Link  to={"/home-1"}>Theme for Creative Bloggers available on</Link>
                            </li>
                            <li>
                              <Link  to={"/home-1"}>@ ThemeForest https://t.co/2r1POjOjgV</Link>
                            </li>
                            <li>
                              <Link  to={"/home-1"}>C… https://t.co/rDAnPyClu1</Link>
                            </li>
                          </ul>
                          <span>November 25, 2018</span>
                          <i className="fab fa-twitter" />
                        </div>
                        <div className="sidebar-twitter-feeds-item">
                          <ul>
                            <li>
                              <Link  to={"/home-1"}>Rescue - #Gutenberg ready @ wordpress</Link>
                            </li>
                            <li>
                              <Link  to={"/home-1"}>Theme for Creative Bloggers available on</Link>
                            </li>
                            <li>
                              <Link  to={"/home-1"}>@ ThemeForest https://t.co/2r1POjOjgV</Link>
                            </li>
                            <li>
                              <Link  to={"/home-1"}>C… https://t.co/rDAnPyClu1</Link>
                            </li>
                          </ul>
                          <span>November 25, 2018</span>
                          <i className="fab fa-twitter" />
                        </div>
                      </div>
                    </div>
                    <div className="blog-sidebar-item mt-30">
                      <div className="sidebar-title">
                        <h4 className="title">Instagram Feeds</h4>
                      </div>
                      <div className="sidebar-instagram mt-35">
                        <ul>
                          <li>
                            <Link  to={"/home-1"}>
                              <img src="assets/images/instagram-1.jpg" alt="" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>
                              <img src="assets/images/instagram-2.jpg" alt="" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>
                              <img src="assets/images/instagram-3.jpg" alt="" />
                            </Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link  to={"/home-1"}>
                              <img src="assets/images/instagram-4.jpg" alt="" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>
                              <img src="assets/images/instagram-5.jpg" alt="" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>
                              <img src="assets/images/instagram-6.jpg" alt="" />
                            </Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link  to={"/home-1"}>
                              <img src="assets/images/instagram-7.jpg" alt="" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>
                              <img src="assets/images/instagram-8.jpg" alt="" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>
                              <img src="assets/images/instagram-9.jpg" alt="" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-sidebar-item mt-30">
                      <div className="sidebar-title">
                        <h4 className="title">Instagram Feeds</h4>
                      </div>
                      <div className="sidebar-tags mt-35">
                        <ul>
                          <li>
                            <Link  to={"/home-1"}>Popular</Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>desgin</Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>ux</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link  to={"/home-1"}>usability</Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>develop</Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>icon</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link  to={"/home-1"}>business</Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>consult</Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>kit</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link  to={"/home-1"}>keyboard</Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>mouse</Link>
                          </li>
                          <li>
                            <Link  to={"/home-1"}>tech</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-sidebar-add mt-30">
                      <img src="assets/images/sidebar-ad-2.jpg" alt="add" />
                      <div className="add-content">
                        <span>350x600</span>
                        <h5 className="title">Add Banner</h5>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
         );
    }
}
 
export default BlogSideBar;