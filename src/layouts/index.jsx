import React from 'react';
import {Helmet} from "react-helmet";
import Header from './partials/header/Header';
import Footer from './partials/footer/index';
import { withI18n } from '../i18n/i18n';

class Layout extends React.Component {

    render() {
        const { t } = this.props.i18n || {};
        return (
            <React.Fragment>
                <Helmet>
                    <title>{t('meta.title', 'Swallow Homes Japan')}</title>
                </Helmet>
                <Header />
                    { this.props.children }
                <Footer/>
            </React.Fragment>
        )

    }
}

export default withI18n(Layout)