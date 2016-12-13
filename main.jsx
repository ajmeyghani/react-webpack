import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from 'my-button/my-button';
import List from 'list/list';

import DetailContainer from 'detail-container/detail-container';
const someItem = {
  id: 1, name: 'tom'
};

const dataItems = [
  {id: 1, name: 'item1'},
];

const App = React.createClass({
  render() {
    return (
      <div>
        <List items={dataItems} customButton={MyButton} />
        <List items={[{id: 0, name: 'cool'}]} />
        <p>-------------------------</p>
        <DetailContainer item={someItem}>
          <p>This is the first child</p>
          <p>This is the second one</p>
        </DetailContainer>
      </div>
      );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
