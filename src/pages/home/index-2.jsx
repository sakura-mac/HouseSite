import React from 'react';

import Footer from '../../layouts/partials/footer/index';
import Header from '../../layouts/partials/header/Header2';
import Banner2 from '../../componets/banner/Index2';
import AboutPart from '../../componets/aboutPart/Index';
import WhatWeDoPart from '../../componets/whatWeDoPart/Index';
import IntroVideoPart from '../../componets/introVideoPart/Index';
import LeadershipPart from '../../componets/LeadershipPart/Index';
import ProgressBarPart from '../../componets/progressBarPart/Index';
import QuotePart from '../../componets/quotePart/Index';
import AnswersPart from '../../componets/answersPart/Index';
import Action2Part from '../../componets/action2Part/Index';
import LatestNewsPart from '../../componets/latestNewsPart/Index';


class Index2 extends React.Component {

    render() { 
        return ( 
            <>
                <Header/>
                <Banner2/>
                <AboutPart/>
                <WhatWeDoPart/>
                <IntroVideoPart/>
                <LeadershipPart/>
                <ProgressBarPart/>
                <QuotePart/>
                <AnswersPart/>
                <Action2Part/>
                <LatestNewsPart/>
                <Footer/>
            </>
         );
    }
}
 
export default Index2;