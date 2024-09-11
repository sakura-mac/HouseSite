import React from 'react';
import Footer from '../../layouts/partials/footer/index';
import Header from '../../layouts/partials/header/Header4';
import Banner from '../../componets/banner/Index4';
import FeaturesPart from '../../componets/FeaturesPart/Index';
import ChoosePart from '../../componets/choosePart/Index';
import Portfolio3Part from '../../componets/portfolio/Index3';
import CounterPart from '../../componets/counterPart/Index';
import FaqPart from '../../componets/FaqPart/Index4';
import GetInTouchPart from '../../componets/getInTouchPart/Index';


class Index4 extends React.Component {
     
    render() { 
        return ( 
            <React.Fragment>
                <Header/>
                <Banner/>
                <FeaturesPart/>
                <ChoosePart/>

                <Portfolio3Part/>

                <CounterPart/>

                <FaqPart/>
                <GetInTouchPart/>
                <Footer/>
            </React.Fragment>
         );
    }
}
 
export default Index4;