var React = require('react');

var About = () => {
  return (
    <div className="card topmargin">
      <div className="card-divider">
        <h1 className="text-center page-title">About</h1>
      </div>
      <div className="card-section">
        <p>This Timer app was built with <a href="http://facebook.github.io/react" target="_blank">ReactJS</a>, styled with <a href="http://sass-lang.com/" target="_blank">Sass</a>, and tested with <a href="https://karma-runner.github.io/" target="_blank">Karma</a>.</p>
        <p>To use it as a stopwatch, the timer is set to 00:00 by default. Just press start to begin the timer. To use it as a countdown, set the timer to anything other then 00:00 and press start.</p>
      </div>
    </div>
  );
};

module.exports = About;
