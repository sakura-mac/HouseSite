import React from 'react';
import {Helmet} from "react-helmet";
import Header from './partials/header/Header';
import Footer from './partials/footer/index';

class Layout extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title> Swallow Homes Japan </title>
                </Helmet>
                <Header />
                    { this.props.children }
                <Footer/>
            </React.Fragment>
        )

    }
}

export default Layout