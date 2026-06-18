import React from 'react';
import PartialNav from './PartialNav';
import { Link } from "react-router-dom";
import SocialLink from './SocialLink';
import Logo from '../../../assets/images/img_2.png';
import { Row, Col, Navbar } from 'react-bootstrap';
import { FiMail, FiPhone } from "react-icons/fi";
import Logo1 from "../../../assets/images/img_2.png";
import { withI18n } from '../../../i18n/i18n';


class Header extends React.Component {

    render() {
        const { t, locale } = this.props.i18n || {};
        const brandFontClass = locale === 'ja' ? 'brand-font-ja' : 'brand-font-zh';
        return (
            <>
          <header className="header-area header-area-2 header-area-4">
            <div className="header-top pl-30 pr-30 white-bg">
              <Row className="align-items-center">
                <Col md="6" sm="7">
                  <div className="header-left-side text-center text-sm-left">
                    <ul>
                      <li>
                        <a  href={`mailto:${t('header.email')}`} target="__blank">
                        <FiMail /> 
                        
                        {t('header.email')}
                        </a>
                      </li>
                      <li>
                        <a href={`tel:${t('header.phone')}`}>
                        <FiPhone />{' '}
                        {t('header.phone')}
                        </a>
                      </li>
                      </ul>
                  </div>
                </Col>
                <Col md="6" sm="5">
                  <div className="header-right-social text-center text-sm-right">
                    <SocialLink/>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="header-nav">
              <div className="navigation">
                <Navbar expand="lg" className={`transparent-color`}>
                  <style>
                    {`
                    @font-face {
                      font-family: 'Xique';
                      src: url('/assets/fonts/xique.ttf') format('truetype');
                      font-weight: normal;
                      font-style: normal;
                    }

                    .brand-font-zh {
                      font-family: 'Xique', serif;
                    }
                    .brand-font-ja {
                      font-family: 'Noto Serif JP', serif;
                      font-weight: 700;
                    }

                    .custom-brand-text {
                      margin-left: 10px; /* 调整文字与图片的间距 */
                    }
                
                    .custom-subtext {
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
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <div style={{display: 'flex', alignItems: 'center'}}>
                        <img
                            src={Logo1}
                            alt="Logo"
                            style={{
                              maxHeight: '60px', // 根据需要调整图片的最大高度
                              width: 'auto',    // 保持图片的纵横比
                              height: 'auto'    // 保持图片的纵横比
                            }}
                        />
                        <span className={`custom-brand-text ${brandFontClass}`}>
                        {t('header.brandTitle')}
                      </span>
                      </div>
                      <span className={`custom-subtext ${brandFontClass}`}>
                      {t('header.brandSubtitle')}
                    </span>
                    </div>
                  </Navbar.Brand>
                  <Navbar.Toggle>
                    <span className="toggler-icon"/>
                    <span className="toggler-icon"/>
                    <span className="toggler-icon"/>
                  </Navbar.Toggle> {/* navbar toggler */}
                  <Navbar.Collapse className="sub-menu-bar" id="navbarSupportedContent">
                    <PartialNav/>
                  </Navbar.Collapse> {/* navbar collapse */}
                  {/*<div className="bar-area d-none d-xl-block">*/}
                  {/*  <ul>*/}
                  {/*    <li><Link to={"shop"}><FiShoppingCart/></Link></li>*/}
                  {/*    <li><Link to={"/"}><i className="fal fa-search"/></Link></li>*/}
                  {/*    <li><Link to={"/"}><i className="fal fa-bars"/></Link></li>*/}
                  {/*  </ul>*/}
                  {/*</div>*/}

                </Navbar>
              </div>
              {/* navigation */}
            </div>
          </header>
            </>
        );
    }
}

export default withI18n(Header);