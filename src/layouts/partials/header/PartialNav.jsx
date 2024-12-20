import React from 'react';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

class PartialNav extends React.Component {
    render() { 
        return ( 
            <>
                <Nav className="mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>首页</Link>
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
                        <Link className="nav-link" to={'/about'}>关于我们</Link>
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
                        <Link className="nav-link" to={'/case-study'}>房源速览</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to={'/case-study'}>神户</Link>
                            </li>
                            <li>
                                <Link to={'/case-study'}>大阪</Link>
                            </li>
                            <li>
                                <Link to={'/case-study'}>京都</Link>
                            </li>
                            <li>
                                <Link to={'/case-study'}>北海道</Link>
                            </li>
                            <li>
                                <Link to={'/case-study'}>冲绳</Link>
                            </li>
                            <li>
                                <Link to={'/case-study'}>东日本</Link>
                            </li>

                            <li>
                                <Link to={'/case-study'}>西日本</Link>
                            </li>
                            <li>
                                <Link to={'/case-study'}>东京</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/contact'}>联系我们</Link>
                            </li>
                        </ul>
                        {/* sub menu */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/blog-standard'}>新闻中心</Link>
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
                        <Link className="nav-link" to={'/contact'}>联系我们</Link>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.xiaohongshu.com/user/profile/5df991fd00000000010010eb" target="_blank" rel="noopener noreferrer"> 更多推荐</a>
                    </li>
                </Nav>
            </>
        );
    }
}

export default PartialNav;