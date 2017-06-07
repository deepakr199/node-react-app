import React                                        from 'react';
import { Router, Route, IndexRoute, hashHistory }   from "react-router";

// Layouts
import EventListLayout                      from './components/EventListLayout';
import EventDetailLayout                    from './components/EventDetailLayout';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={EventListLayout} >
      <Route path="events/:id" component={EventDetailLayout} />
    </Route>
  </Router>
);
