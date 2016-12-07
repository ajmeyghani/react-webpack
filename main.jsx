import React from 'react';
import ReactDOM from 'react-dom';
import Page from 'page/page';
import DetailContainer from 'detail-container/detail-container';

const someItem = {
  id: 1, name: 'tom'
};

const App = React.createClass({
  render() {
    return (
      <div>
        <Page />
        <DetailContainer item={someItem}>
          <p>This is the first child</p>
          <p>This is the second one</p>
        </DetailContainer>
      </div>
      );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
