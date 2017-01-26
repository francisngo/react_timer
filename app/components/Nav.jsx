var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            Timer
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Stopwatch</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
    </div>
  )
};

module.exports = Nav;
