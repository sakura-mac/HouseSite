import React from 'react';
import './index.scss'
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

export default class SideBar extends React.Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            showPriceTooltip: false
        };

        this.showPriceType = this.showPriceType.bind(this);
    }

    showPriceType(event){
        const currentState = this.state.showPriceTooltip;

        this.setState({
            showPriceTooltip: !currentState
        });
        event.preventDefault();
    }


    render() {

        return (
                <Col lg="4" md="12" sm="12">
                    <div className="product-side-bar">

                        <div className="price-box widget mt-3 white-bg">
                            <div className="title d-flex justify-content-between">

                                <div className={`price-box-select-price`}>

                                    <Link to={'index'} onClick={this.showPriceType}>
                                        <strong className="title">Regular License  <i className="fas fa-sort-down"> </i></strong>
                                    </Link>

                                    <div className="price-tooltip "
                                             style={ this.state.showPriceTooltip? {display: "block"}: {display: 'none'}}
                                            >
                                            <div className="price-tooltip__arrow"> </div>
                                            <div className={`price-tooltip__box`}>
                                                <div className="d-flex ">
                                                    <div className="p-2 w-100 bd-highlight">Regular License Selected</div>
                                                    <div className="p-2 flex-shrink-1 bd-highlight"><strong>$25</strong></div>
                                                </div>
                                                <p>Use, by you or one client, in a single end product which end users <strong>are not</strong> charged for. The total price includes the item price and a buyer fee.</p>

                                            </div>
                                            <div className={`price-tooltip__box`}>

                                                <div className="d-flex price-tooltip__box">
                                                    <div className="p-2 w-100 bd-highlight">Extended License Selected</div>
                                                    <div className="p-2 flex-shrink-1 bd-highlight"><strong>$700</strong></div>
                                                </div>
                                                <p>Use, by you or one client, in a single end product which end users <strong>can be</strong> charged for. The total price includes the item price and a buyer fee.</p>
                                                <p><a href="https://themeforest.net/licenses/standard">View license details</a></p>

                                            </div>

                                        </div>
                                </div>

                                <div>
                                    <strong className="product-price">$120</strong>
                                </div>
                            </div>


                            <div className="sidebar-list mt-5">
                                <ul>
                                    <li><i className="fas fa-check-circle"> </i> Free technical support</li>
                                    <li><i className="fas fa-check-circle"> </i> Future product updates</li>
                                    <li><i className="fas fa-check-circle"> </i> Quality checked by Envato</li>
                                    <li><i className="fas fa-check-circle"> </i> Lowest price guarantee</li>
                                </ul>
                            </div>

                            <button type="button" className="btn btn-primary btn-lg btn-block mt-4">Purchase now</button>

                        </div>


                        <div className="shop-sidebar-area mt-0 white-bg">
                            <div className="sidebar-title text-center">
                                <h5 className="title">Information</h5>
                            </div>


                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td>Last Update</td>
                                        <td> 13 February 20 </td>
                                    </tr>
                                    <tr>
                                        <td>Created</td>
                                        <td> 	13 February 20 </td>
                                    </tr>
                                    <tr>
                                        <td>High Resolution</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Compatible Browsers</td>
                                        <td>IE10, IE11, Firefox, Safari, Opera, Chrome, Edge</td>
                                    </tr>
                                    <tr>
                                        <td>Compatible With</td>
                                        <td> 	ReactJS, Bootstrap 4.x</td>
                                    </tr>
                                    <tr>
                                        <td>ThemeForest Files Included</td>
                                        <td>HTML Files, CSS Files, Sass Files, JS Files</td>
                                    </tr>
                                    <tr>
                                        <td>Columns</td>
                                        <td> 	4+</td>
                                    </tr>
                                    <tr>
                                        <td>Documentation</td>
                                        <td> 	Well Documented</td>
                                    </tr>
                                    <tr>
                                        <td>Layout</td>
                                        <td> 	Responsive</td>
                                    </tr>
                                    <tr>
                                        <td>Tags</td>
                                        <td> agency, business, corporate, creative, IT services, modern, portfolio, react, reactjs-template, services, solutions, startup, technology </td>
                                    </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </Col>
        );
    }
}

