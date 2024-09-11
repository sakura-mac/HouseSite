import React from 'react';
//import { toast } from 'react-toastify';
import Header from '../../layouts/partials/header/Index';
import Footer from '../../layouts/partials/footer/index';

import Banner from '../../componets/banner/Index';
import WhoWeAreArea from '../../componets/whoWeAreArea/Index';
import SolutionPart from '../../componets/solutionPart/Index';
import LatestServicesPart from '../../componets/LatestServicesPart/Index';
import WhyChoosePart from '../../componets/whyChoosePart/Index';
import CaseStudiesPart from '../../componets/whoWeAreArea/Index';
import TeamMemberPart from '../../componets/teamMemberPart/Index';
import ContactUsPart from '../../componets/contactUsPart/Index';
import OueChoosePart from '../../componets/OueChoosePart/Index';
import MeetUsPart from '../../componets/MeetUsPart/Index';
import LatestNewsPart from '../../componets/latestNewsPart/Index';
import Brand2Part from '../../componets/brand2Part/Index';


class Index1 extends React.Component {

    render() { 
        return ( 
            <React.Fragment>
                <Header />
                <Banner/>
                <WhoWeAreArea/>
                <SolutionPart/>
                <LatestServicesPart/>
                <WhyChoosePart/>
                <CaseStudiesPart/>
                <TeamMemberPart/>
                <ContactUsPart/>
                <OueChoosePart/>
                <MeetUsPart/>
                <LatestNewsPart/>
                <Brand2Part/>
                <Footer />
            </React.Fragment>
         );
    }
}
 
export default Index1;