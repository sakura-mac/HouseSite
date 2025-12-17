import React from 'react';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { withI18n } from '../../../i18n/i18n';

class PartialNav extends React.Component {
    render() { 
        const { t } = this.props.i18n || {};
        return ( 
            <>
                <Nav className="mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>{t('header.nav.home')}</Link>
                        {/*<ul className="sub-menu">*/}
                        {/*  <li>*/}
                        {/*    <Link to={'/'}>Home 1</Link>*/}
                        {/*  </li>*/}
                        {/*  <li>*/}
                        {/*    <Link to={'/index2'}>Home 2</Link>*/}
                        {/*  </li>*/}
                        {/*  <li>*/}
                        {/*    <Link to={'/index3'}>Home 3</Link>*/}
                        {/*  </li>*/}
                        {/*  <li>*/}
                        {/*    <Link to={'/index4'}>Home 4</Link>*/}
                        {/*  </li>*/}
                        {/*</ul>*/}
                        {/*/!* sub menu *!/*/}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/about'}>{t('header.nav.about')}</Link>
                    </li>
                    {/*<li className="nav-item">*/}
                    {/*      <Link className="nav-link"  to={'/'}>房源速览</Link>*/}
                    {/*  <ul className="sub-menu">*/}
                    {/*    <li>*/}
                    {/*      <Link to={'/services'}>Services</Link>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*      <Link to={'/services-details'}>Services Details</Link>*/}
                    {/*    </li>*/}
                    {/*  </ul>*/}
                    {/*  /!* sub menu *!/*/}
                    {/*</li>*/}
                    <li className="nav-item">
                        <Link className="nav-link" to={'/case-study'}>{t('header.nav.houses')}</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to={'/case-study'}>{t('header.nav.regions.kobe')}</Link>
                            </li>
                            <li>
                                <Link to={'/case-study'}>{t('header.nav.regions.osaka')}</Link>
                            </li>
                            <li>
                                <Link to={'/case-study'}>{t('header.nav.regions.kyoto')}</Link>
                            </li>
                            <li>
                                <Link to={'/case-study'}>{t('header.nav.regions.hokkaido')}</Link>
                            </li>
                            <li>
                                <Link to={'/case-study'}>{t('header.nav.regions.okinawa')}</Link>
                            </li>
                            <li>
                                <Link to={'/case-study'}>{t('header.nav.regions.east')}</Link>
                            </li>

                            <li>
                                <Link to={'/case-study'}>{t('header.nav.regions.west')}</Link>
                            </li>
                            <li>
                                <Link to={'/case-study'}>{t('header.nav.regions.tokyo')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/contact'}>{t('header.nav.contact')}</Link>
                            </li>
                        </ul>
                        {/* sub menu */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/blog-standard'}>{t('header.nav.blog')}</Link>
                        {/*<ul className="sub-menu">*/}
                        {/*    <li>*/}
                        {/*        <Link to={'/blog-standard'}>新闻速递</Link>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <Link to={'/blog-standard'}>通知中心</Link>*/}
                        {/*    </li>*/}
                        {/*    /!*<li>*!/*/}
                        {/*    /!*    <Link to={'/blog-standard-details'}>Blog Details 2</Link>*!/*/}
                        {/*    /!*</li>*!/*/}
                        {/*</ul>*/}
                        {/* sub menu */}
                    </li>
                    {/*<li className="nav-item">*/}
                    {/*  <Link  className="nav-link" to={'/shop'}>Shop</Link>*/}
                    {/*  <ul className="sub-menu">*/}
                    {/*      <li>*/}
                    {/*        <Link to={'/shop'}>shop</Link>*/}
                    {/*      </li>*/}
                    {/*      <li>*/}
                    {/*        <Link to={'/shop-details'}>shop Details</Link>*/}
                    {/*      </li>*/}

                    {/*      <li>*/}
                    {/*          <Link to={'/products'}>Product</Link>*/}
                    {/*      </li>*/}
                    {/*      <li>*/}
                    {/*          <Link to={'/products-details'}>Product Details</Link>*/}
                    {/*      </li>*/}
                    {/*  </ul>*/}
                    {/*  /!* sub menu *!/*/}
                    {/*</li>*/}
                    <li className="nav-item">
                        <Link className="nav-link" to={'/contact'}>{t('header.nav.contact')}</Link>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.xiaohongshu.com/user/profile/5df991fd00000000010010eb" target="_blank" rel="noopener noreferrer"> {t('header.nav.more')}</a>
                    </li>
                </Nav>
            </>
        );
    }
}

export default withI18n(PartialNav);