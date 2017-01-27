var React = require('react');
var Nav = require('Nav');
var Footer = require('Footer');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

module.exports = Main;
