import React from 'react';
import PartialNav from './PartialNav';
import { Link } from "react-router-dom";
import SocialLink from './SocialLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faLongArrowAltRight,
  faSearch,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import Logo1 from '../../../assets/images/img_2.png';
import { Row, Col, Navbar } from 'react-bootstrap';
import { FiMail, FiPhone } from "react-icons/fi";
import { withI18n } from '../../../i18n/i18n';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      menuShowHideToggle: false,
      menuShowHideToggleClass: ' collapse'
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }

  render() {
    const { t, locale, setLocale } = this.props.i18n || {};
    return (
        <React.Fragment>
          <header className="header-area header-area-2 header-area-4">
            <div className="header-top pl-30 pr-30 white-bg">
              <Row className="align-items-center">
                <Col xs="4" md="6" sm="7">
                  <div className="header-left-side text-center text-sm-left">
                    <ul>
                      <li>
                        <a href={`mailto:${t('header.email')}`} target="__blank">
                          <FiMail size="1.4em" />{' '}
                          {t('header.email')}
                        </a>
                      </li>
                      <li>
                        <a href={`tel:${t('header.phone')}`}>
                          <FiPhone size="1.4em" />{' '}
                          {t('header.phone')}
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="6" sm="5">
                  <div className="header-right-social text-center text-sm-right">
                    <SocialLink />
                    <select
                      aria-label="language-switcher"
                      value={locale}
                      onChange={(e) => setLocale && setLocale(e.target.value)}
                      style={{ marginLeft: 12 }}
                    >
                      <option value="zh">中文</option>
                      <option value="ja">日本語</option>
                    </select>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="header-nav">
              <div className={this.state.isTop ? 'navigation' : 'bg-white navigation sticky'}>
                <Navbar bg="light" expand="lg">
                  <style>
                    {`
                    @font-face {
                      font-family: 'Xique';
                      src: url('/assets/fonts/xique.ttf') format('truetype');
                      font-weight: normal;
                      font-style: normal;
                    }

                    .custom-brand-text {
                      font-family: 'Xique', sans-serif; /* 使用自定义字体 */
                      margin-left: 10px; /* 调整文字与图片的间距 */
                    }
                
                    .custom-subtext {
                      font-family: 'Xique', sans-serif; /* 使用自定义字体 */
                      text-align: center;
                      display: block;
                      margin-top: 5px; /* 调整文字与上方元素的间距 */
                    }
                
                    /* 默认字体大小 */
                    .custom-brand-text {
                      font-size: 18px;
                    }
                    .custom-subtext {
                      font-size: 12px;
                    }
                
                    /* 中等屏幕（宽度大于等于768px） */
                    @media (min-width: 768px) {
                      .custom-brand-text {
                        font-size: 22px; /* 调整为较大字体 */
                      }
                      .custom-subtext {
                        font-size: 14px;
                      }
                    }
                
                    /* 大屏幕（宽度大于等于1200px） */
                    @media (min-width: 1200px) {
                      .custom-brand-text {
                        font-size: 26px; /* 更大的字体 */
                      }
                      .custom-subtext {
                        font-size: 16px;
                      }
                    }
                  `}
                  </style>

                  <Navbar.Brand as={Link} to={'/'}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={Logo1}
                            alt="Logo"
                            style={{
                              maxHeight: '60px', // 根据需要调整图片的最大高度
                              width: 'auto',    // 保持图片的纵横比
                              height: 'auto'    // 保持图片的纵横比
                            }}
                        />
                        <span className="custom-brand-text">
                          {t('header.brandTitle')}
                      </span>
                      </div>
                      <span className="custom-subtext">
                        {t('header.brandSubtitle')}
                    </span>
                    </div>
                  </Navbar.Brand>

                  <Navbar.Toggle
                      onClick={this.menuShowHide}
                      className={`navbar-toggler 
                    ${this.state.isTop ? '' : ' sticky'}
                    ${this.state.menuShowHideToggle ? 'active' : 'collapsed'}
                  `}
                      aria-controls="navbarSupportedContent"
                      aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </Navbar.Toggle>

                  <Navbar.Collapse className="sub-menu-bar" id="navbarSupportedContent">
                    <PartialNav />
                  </Navbar.Collapse>

                  {/*<div className="bar-area d-none d-xl-block">*/}
                  {/*  <ul>*/}
                  {/*    <li>*/}
                  {/*      <Link to={"shop"}>*/}
                  {/*        <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />*/}
                  {/*      </Link>*/}
                  {/*    </li>*/}
                  {/*    <li>*/}
                  {/*      <Link to={"/"}>*/}
                  {/*        <FontAwesomeIcon icon={faSearch} className="mr-1" />*/}
                  {/*      </Link>*/}
                  {/*    </li>*/}
                  {/*    <li className="d-none d-md-block d-lg-none">*/}
                  {/*      <Link to={"/"}>*/}
                  {/*        <FontAwesomeIcon icon={faBars} className="mr-1" />*/}
                  {/*      </Link>*/}
                  {/*    </li>*/}
                  {/*  </ul>*/}
                  {/*</div>*/}
                  {/*<div className="navbar-btn mr-100">*/}
                  {/*  <Link className="main-btn" to={"/"}>Free Consulting*/}
                  {/*    <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-2" />*/}
                  {/*  </Link>*/}
                  {/*</div>*/}
                </Navbar>
              </div> {/* navigation */}
            </div>
          </header>
        </React.Fragment>
    );
  }
}

export default withI18n(Header);
