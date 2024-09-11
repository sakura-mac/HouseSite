import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

class BlogDetailsSideBar extends React.Component {

  render() { 
    return ( 
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
                  <Link to={"https://facebook.com/"} target="__blank">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to={"/"} target="__blank">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to={"https://behance.com"} target="__blank">
                    <i className="fab fa-behance" />
                  </Link>
                </li>
                <li>
                  <Link to={"https://linkedin.com"} target="__blank">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </li>
                <li>
                  <Link to={"https://youtube.com"} target="__blank">
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
                <Link to="blog-details">
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
                <Link to={"blog-details"}>
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
              <Link to={"blog-details"}>
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
              <Link to={"blog-details"}>
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
                <Link to={"blog"}>
                    Business<span>26</span>
                  </Link>
                </li>
                <li>
                <Link to={"blog"}>
                    Consultant<span>30</span>
                  </Link>
                </li>
                <li>
                <Link to={"blog"}>
                    Creative<span>71</span>
                  </Link>
                </li>
                <li>
                <Link to={"blog"}>
                    UI/UX<span>56</span>
                  </Link>
                </li>
                <li>
                <Link to={"blog"}>
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
                    <i className="fab fa-behance" />
                  </Link>
                </li>
                <li>
                  <Link  to={"/"}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </li>
                <li>
                  <Link  to={"/"}>
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
                    <Link  to={"/"}>Rescue - #Gutenberg ready @ wordpress</Link>
                  </li>
                  <li>
                    <Link  to={"/"}>Theme for Creative Bloggers available on</Link>
                  </li>
                  <li>
                    <Link  to={"/"}>@ ThemeForest https://t.co/2r1POjOjgV</Link>
                  </li>
                  <li>
                    <Link  to={"/"}>C… https://t.co/rDAnPyClu1</Link>
                  </li>
                </ul>
                <span>November 25, 2018</span>
                <i className="fab fa-twitter" />
              </div>
              <div className="sidebar-twitter-feeds-item">
                <ul>
                  <li>
                    <Link  to={"/"}>Rescue - #Gutenberg ready @ wordpress</Link>
                  </li>
                  <li>
                    <Link  to={"/"}>Theme for Creative Bloggers available on</Link>
                  </li>
                  <li>
                    <Link  to={"/"}>@ ThemeForest https://t.co/2r1POjOjgV</Link>
                  </li>
                  <li>
                    <Link  to={"/"}>C… https://t.co/rDAnPyClu1</Link>
                  </li>
                </ul>
                <span>November 25, 2018</span>
                <i className="fab fa-twitter" />
              </div>
              <div className="sidebar-twitter-feeds-item">
                <ul>
                  <li>
                    <Link  to={"/"}>Rescue - #Gutenberg ready @ wordpress</Link>
                  </li>
                  <li>
                    <Link  to={"/"}>Theme for Creative Bloggers available on</Link>
                  </li>
                  <li>
                    <Link  to={"/"}>@ ThemeForest https://t.co/2r1POjOjgV</Link>
                  </li>
                  <li>
                    <Link  to={"/"}>C… https://t.co/rDAnPyClu1</Link>
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
                  <Link  to={"/"}>
                    <img src="assets/images/instagram-1.jpg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link  to={"/"}>
                    <img src="assets/images/instagram-2.jpg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link  to={"/"}>
                    <img src="assets/images/instagram-3.jpg" alt="" />
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link  to={"/"}>
                    <img src="assets/images/instagram-4.jpg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link  to={"/"}>
                    <img src="assets/images/instagram-5.jpg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link  to={"/"}>
                    <img src="assets/images/instagram-6.jpg" alt="" />
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link  to={"/"}>
                    <img src="assets/images/instagram-7.jpg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link  to={"/"}>
                    <img src="assets/images/instagram-8.jpg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link  to={"/"}>
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
                  <Link  to={"/"}>Popular</Link>
                </li>
                <li>
                  <Link  to={"/"}>desgin</Link>
                </li>
                <li>
                  <Link  to={"/"}>ux</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link  to={"/"}>usability</Link>
                </li>
                <li>
                  <Link  to={"/"}>develop</Link>
                </li>
                <li>
                  <Link  to={"/"}>icon</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link  to={"/"}>business</Link>
                </li>
                <li>
                  <Link  to={"/"}>consult</Link>
                </li>
                <li>
                  <Link  to={"/"}>kit</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link  to={"/"}>keyboard</Link>
                </li>
                <li>
                  <Link  to={"/"}>mouse</Link>
                </li>
                <li>
                  <Link  to={"/"}>tech</Link>
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
      );
    }
}
 
export default BlogDetailsSideBar;