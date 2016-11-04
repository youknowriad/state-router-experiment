import React from 'react';
import { connect } from 'react-redux';
import { ROUTE_RECOGNIZE } from './lib/redux-recognizer';
import LocationUpdater from './lib/location-updater';

const updateUrl = url => ({
  type: ROUTE_RECOGNIZE,
  payload: url
});

const getRouterState = state => state.router;

const App = ({ routerState, updateUrl }) => {
  return (
    <div>
      <LocationUpdater url={ routerState.url } onChange={ updateUrl } />
      <div>state: { JSON.stringify(routerState) }</div>
      <div><a href="/">homepage</a></div>
      <div><a href="/blogs/1">blog root</a></div>
      <div><a href="/blogs/2/edit">blog edit</a></div>
      <div><a href="/blog/3/posts">blog posts</a></div>
      <div><a href="/toto">unknown route</a></div>
    </div>
  );
};

export default connect(
  state => ({
    routerState: getRouterState(state)
  }),
  { updateUrl }
)(App);
