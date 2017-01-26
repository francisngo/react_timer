var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQUery');

var Stopwatch = require('Stopwatch');

describe('Stopwatch', () => {
  it('should exist', () => {
    expect(Stopwatch).toExist();
  });

  it('should start timer on started status', (done) => {
    var stopwatch = TestUtils.renderIntoDocument(<Stopwatch/>);

    stopwatch.handleStatusChange('started');
    expect(stopwatch.state.count).toBe(0);

    setTimeout(() => {
      expect(stopwatch.state.timerStatus).toBe('started');
      expect(stopwatch.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('should pause timer on paused status', (done) => {
    var stopwatch = TestUtils.renderIntoDocument(<Stopwatch/>);

    stopwatch.setState({count: 10});
    stopwatch.handleStatusChange('started');
    stopwatch.handleStatusChange('paused');

    setTimeout(() => {
      expect(stopwatch.state.timerStatus).toBe('paused');
      expect(stopwatch.state.count).toBe(10);
      done();
    }, 1001);
  });

  it('should clear count on stopped status', (done) => {
    var stopwatch = TestUtils.renderIntoDocument(<Stopwatch/>);

    stopwatch.setState({count: 10});
    stopwatch.handleStatusChange('started');
    stopwatch.handleStatusChange('stopped');

    setTimeout(() => {
      expect(stopwatch.state.timerStatus).toBe('stopped');
      expect(stopwatch.state.count).toBe(0);
      done();
    }, 1001);
  });
});
