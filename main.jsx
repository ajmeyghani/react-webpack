import React from 'react';
import ReactDOM from 'react-dom';
import Detail from 'detail/detail';
import Item from 'item/item';

const App = React.createClass({
  render() {
    return (
      <div>
        <Detail />
        <Item />
      </div>
      );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
