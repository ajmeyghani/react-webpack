import React from 'react';
import ReactDOM from 'react-dom';
import Page from 'page/page';

const App = React.createClass({
  render() {
    return (
      <div>
        <Page />
      </div>
      );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
