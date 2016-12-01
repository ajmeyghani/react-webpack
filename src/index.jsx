var React = require('react');
var ReactDOM = require('react-dom');
import axios from 'axios';

var App = React.createClass({
  signupResult() {
    console.log('signing up ....');
  },
  data() {
    return [
      {id: 55, name: 'tom cruise'}
    ]
  },
  render() {
    return (
    <div>
      <Signup onSignup={this.signupResult} />
      <FilterList data={this.data()}/>
    </div>
    );
  }
});

var FilterList = React.createClass({
  getInitialState() {
    return {
      isActive: false,
      filteredProjects: void 0,
      alreadyLoaded: false,
      loadedData: []
    };
  },
  componentWillMount() {
    this.setState({
      filteredProjects: this.props.data
    })
  },
   handleChange: function() {
    this.setState({
      isActive: !this.state.isActive
    }, function() {
      console.log('State changed. New State', this.state.isActive);
      if(this.state.isActive) {
        /* if the checkbox is active get the filtered list */
        if(this.state.alreadyLoaded) {
          console.log('loading data from memory');
          this.setState({
            filteredProjects: this.state.loadedData
          })
        } else {
          axios.get('/api/projects/matches').then(resp => {
            this.setState({
              filteredProjects: resp.data,
              loadedData: resp.data,
              alreadyLoaded: true
            });
            console.log(this.state.filteredProjects);
          })
          .catch(e => {
            if(e) {
              throw e;
            }
          });
        }

      } else {
        /* otherwise assign it to the default list */
        this.setState({
          filteredProjects: this.props.data
        });
      }
    }.bind(this));
  },
  render() {
    return(
      <div>
        <p>Value is {this.state.isActive ? ' Showing Matched Projects': 'Showing All Projects'}</p>
        <input type="checkbox" checked={this.state.isActive} onClick={this.handleChange} />
        <ul>
          {this.state.filteredProjects ? this.state.filteredProjects.map((p, i) => <li key={i}>{p.name}</li>) : ''}
        </ul>
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
