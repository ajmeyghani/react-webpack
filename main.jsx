import React from 'react';
import ReactDOM from 'react-dom';
import Detail from 'detail/detail';

const App = React.createClass({
  render() {
    return (
      <div>
        <Detail />
      </div>
      );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
