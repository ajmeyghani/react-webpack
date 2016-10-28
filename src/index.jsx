var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  signupResult() {
    console.log('signing up ....');
  },
  render() {
    return (
    <div>
      <Signup onSignup={this.signupResult} />
    </div>
    );
  }
});

var Signup = React.createClass({
  login() {
    console.log('loging in');
    setTimeout(() => {
      this.props.onSignup();
    }, 2000);
  },
  render() {
    return (
    <div>
      <p>Sign up</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic fugit voluptate, distinctio impedit temporibus corrupti placeat, tenetur saepe voluptatibus enim, officiis explicabo ea praesentium modi itaque omnis voluptatem. At, et?</p>
      <button onClick={this.login}>Sign up</button>
    </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById('app'));
