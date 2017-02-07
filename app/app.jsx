var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Stopwatch = require('Stopwatch');
var Countdown = require('Countdown');
var About = require('About');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Stopwatch} />
      <Route path="countdown" component={Countdown} />
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);
