import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { I18nProvider } from './i18n/i18n';
import Preloader from './componets/preloader';
import Index1 from './pages/home/index';

// Lazy load all non-home pages
const Index2 = lazy(() => import('./pages/home/index-2'));
const Index3 = lazy(() => import('./pages/home/index-3'));
const Index4 = lazy(() => import('./pages/home/index-4'));
const AboutPage = lazy(() => import('./pages/about'));
const CaseStudy = lazy(() => import('./pages/case-study'));
const CaseDetails = lazy(() => import('./pages/case-study/details'));
const BlogList = lazy(() => import('./pages/blog/blog-standard'));
const BlogDetails = lazy(() => import('./pages/blog/blog-details'));
const BlogGrid = lazy(() => import('./pages/blog/blog-grid'));
const BlogDetails2 = lazy(() => import('./pages/blog/blog-details2'));
const BuyReasons = lazy(() => import('./pages/blog/buy-reasons'));
const VisaPage = lazy(() => import('./pages/visa'));
const VisaDetails = lazy(() => import('./pages/visa/details'));
const NoMatch = lazy(() => import('./pages/errors/no-match'));

const LoadingFallback = () => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }} />;

class App extends React.Component {
	render() {
		return (
			<I18nProvider>
			<BrowserRouter basename="/">
				<Preloader />
				<Suspense fallback={<LoadingFallback />}>
				<Switch>
					<Route exact path="/" component={Index1} />
					<Route path="index" component={Index1} />
					<Route path="index2" component={Index2} />
					<Route path="index3" component={Index3} />
					<Route path="index4" component={Index4} />
					<Route path="/about" component={AboutPage} />
					<Route path="/case-study" component={CaseStudy} />
					<Route path="/house-details/:folderName" component={CaseDetails} />
					<Route path="error" component={NoMatch} />
					<Route path="/blog-standard" component={BlogList} />
					<Route path="blog-grid" component={BlogGrid} />
					<Route path="/blog-details2" component={BlogDetails2} />
					<Route path="buy-reasons" component={BuyReasons} />
					<Route path="/blog-details/:folderName" component={BlogDetails} />
					<Route exact path="/visa" component={VisaPage} />
					<Route path="/visa-details/:folderName" component={VisaDetails} />
				</Switch>
				</Suspense>
				<ToastContainer />
			</BrowserRouter>
			</I18nProvider>
		);
	}
}

export default App;
