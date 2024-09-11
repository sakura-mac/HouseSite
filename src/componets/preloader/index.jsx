import React from 'react';
import PagePreloader from './page';

export default class Preloader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                pageLoading: false,
            });
        }, 2000);
    }

    render() {
        return (
            <React.Fragment>
            <div className="preloader" style={this.state.pageLoading? {display: 'block'} : { display: 'none'}}>
                <div className="loading">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </div>
            </div>
            <PagePreloader/>
            </React.Fragment>
        );
    }
}
