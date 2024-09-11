import React from 'react';
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

export default class ProductHeader extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            showPriceTooltip: false
        }

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
                <div className={`product-header`}>
                    <Container>
                        <Row>
                            <Col sm="12">

                                <div className="page-title-item">
                                    <h2 className="title">Our Portfolio</h2>
                                </div>

                                <div className={`product-header-tab`}>
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <button className="nav-link active">Overview </button>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link"  to={"products-details"}>Comments </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"products-details"}>Reviews </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link"  to={"products-details"}>Support </Link>
                                        </li>

                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
        );
    }
}

