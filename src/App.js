import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Index1 from './pages/home/index';
import Index2 from './pages/home/index-2';
import Index3 from './pages/home/index-3';
import Index4 from './pages/home/index-4';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ServicesPage from './pages/service';
import ServicesDetails from './pages/service/details';
import CaseStudy from './pages/case-study';
import CaseDetails from './pages/case-study/details';
import ComingSoon from './pages/coming-soon';
import FaqPage from './pages/faq';
import PricingPage from './pages/pricing';
import ShopPage from './pages/shop';
import ShopDetailsPage from './pages/shop/details';
import ProductPage from './pages/product';
import ProductDetailPage from "./pages/product-details";

import TeamPage from './pages/team';
import TeamDetailsPage from './pages/team/details';
import BlogStandard from './pages/blog/blog-standard';
import BlogGrid from './pages/blog/blog-grid';
import BlogDetails from './pages/blog/blog-details';
import BlogDetails2 from './pages/blog/blog-details2';


import NoMatch from './pages/errors/no-match';
import Preloader from "./componets/preloader";

class App extends React.Component {

	render() {
		return (
			<BrowserRouter basename={'/'} >
				<Preloader/>
				<Switch>
			
				  <Route exact path="" component={Index1}/>				  
				  <Route path="index" component={Index1}/>
				  <Route path="index2" component={Index2}/>
				  <Route path="index3" component={Index3}/>
				  <Route path="index4" component={Index4}/>

				  <Route path="about" component={AboutPage}/>
				  <Route path="services" component={ServicesPage}/>
				  <Route path="services-details" component={ServicesDetails}/>

				  <Route path="case-study" component={CaseStudy}/>
				  <Route path="case-details" component={CaseDetails}/>
				  <Route path="coming-soon" component={ComingSoon}/>
				  <Route path="error" component={NoMatch}/>
				  <Route path="faq" component={FaqPage}/>
				  <Route path="pricing" component={PricingPage}/>

				  <Route path="products" component={ProductPage}/>
				  <Route path="products-details" component={ProductDetailPage}/>
				  <Route path="shop" component={ShopPage}/>

				  <Route path="shop-details" component={ShopDetailsPage}/>
				  <Route path="team" component={TeamPage}/>
				  <Route path="team-details" component={TeamDetailsPage}/>
				  <Route path="blog-standard" component={BlogStandard}/>
				  <Route path="blog-grid" component={BlogGrid}/>
				  <Route path="blog-details" component={BlogDetails}/>
				  <Route path="blog-details2" component={BlogDetails2}/>

				  <Route path="contact" component={ContactPage}/>

				  <Route component={NoMatch} /> 
				 
				</Switch>
			<ToastContainer />
			
		</BrowserRouter>
		 );
	}
}
 
export default App;
