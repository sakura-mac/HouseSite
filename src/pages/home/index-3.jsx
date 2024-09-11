import React from 'react';
import Footer from '../../layouts/partials/footer/index';
import Header from '../../layouts/partials/header/Header3';
import Banner from '../../componets/banner/Index3';
import ServicesPart from '../../componets/servicesPart/Index';
import PortfolioPart from '../../componets/portfolio/Index';
import FaqPart from '../../componets/FaqPart/Index';
import TeamPart from '../../componets/teamPart/Index';
import ActionPart from '../../componets/actionPart/Index';
import LatestNewsPart from '../../componets/latestNewsPart/Index';


class Index3 extends React.Component {

    render() { 
        return ( 
            <>
            <Header/>
            <Banner/>
            <ServicesPart/>
            <PortfolioPart/>
            <FaqPart/>
            <TeamPart/>
            <ActionPart/>
            <LatestNewsPart/>
            <Footer/>
            </>
        );
    }
}
 
export default Index3;