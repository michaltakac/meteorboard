import App from './app/App.react';
import Charts from './charts/Page.react';
import Forms from './forms/Page.react';
import Home from './home/Page.react';
import NotFound from './notfound/Page.react';
import React from 'react';
import Widgets from './widgets/Page.react';
import {IndexRoute, Route} from 'react-router';

export default function createRoutes(getState) {
  return (
    <Route component={App} path="/">
      <IndexRoute component={Home} />
      <Route component={Charts} path="charts" />
      <Route component={Forms} path="forms" />
      <Route component={Widgets} path="widgets" />
      <Route component={NotFound} path="*" />
    </Route>
  );
}
