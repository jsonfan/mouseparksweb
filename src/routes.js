import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Landing from './pages/Landing/Landing';
import Park from './pages/Park/Park';
import Attraction from './pages/Attraction/Attraction';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App}>
       <IndexRoute component={Landing} />
       <Route path="/contact" component={Contact} />
       <Route path="/park/:id" component={Park} />
       <Route path="/attraction/:id/region/:region" component={Attraction} />
       <Route path="*" component={NotFound} />
   </Route>
 </Router>
);
export default Routes;
