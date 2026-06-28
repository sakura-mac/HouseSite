import React from 'react';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { withI18n } from '../../../i18n/i18n';

class PartialNav extends React.Component {
    render() { 
        const { t, locale, setLocale } = this.props.i18n || {};
        const langs = [
            { code: 'zh', label: '中文' },
            { code: 'ja', label: '日本語' },
            { code: 'en', label: 'English' },
        ];
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
                                <Link to={'/case-study?tag=selling'}>{t('house.tags.selling')}</Link>
                            </li>
                            <li>
                                <Link to={'/case-study?tag=managed'}>{t('house.tags.managed')}</Link>
                            </li>
                            <li>
                                <Link to={'/case-study?tag=sold'}>{t('house.tags.sold')}</Link>
                            </li>
                            <li>
                                <Link to={'/case-study?tag=owned'}>{t('house.tags.owned')}</Link>
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
                        <Link className="nav-link" to={'/visa'}>{t('header.nav.more')}</Link>
                    </li>
                </Nav>
                <div className="mobile-lang-switcher" style={{
                    display: 'flex',
                    gap: '8px',
                    padding: '12px 15px',
                    marginTop: '8px',
                    borderTop: '1px solid #eee',
                }}>
                    <style>{`
                        @media (min-width: 992px) {
                            .mobile-lang-switcher { display: none !important; }
                        }
                    `}</style>
                    {langs.map(l => (
                        <button
                            key={l.code}
                            onClick={() => setLocale && setLocale(l.code)}
                            style={{
                                flex: 1,
                                padding: '8px 0',
                                borderRadius: '6px',
                                border: locale === l.code ? '1px solid #0f3c9e' : '1px solid #ddd',
                                background: locale === l.code ? '#0f3c9e' : '#fff',
                                color: locale === l.code ? '#fff' : '#333',
                                fontSize: '14px',
                                fontWeight: '500',
                                cursor: 'pointer',
                            }}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>
            </>
        );
    }
}

export default withI18n(PartialNav);