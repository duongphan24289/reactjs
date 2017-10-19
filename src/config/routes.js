import React from 'react';
import { Route } from 'react-router';
import {
  DMM,
  PageNotFound,
  Dashboard
} from 'containers';

export default (
  <Route component={DMM}>
    <Route path="/" component={Dashboard} />
    <Route path="*" component={PageNotFound} />
  </Route>
);