import React from 'react';
import ReactDOM from 'react-dom';
import Page from 'page/page';
import DetailContainer from 'detail-container/detail-container';
import ItemHeader from 'item-header';
import ItemBody from 'item-body';

/* to provide the implementation just override by providing your own css html */

const someItem = {
  id: 1, name: 'tom'
};

const App = React.createClass({
  render() {
    return (
      <div>
        <Page />
        <DetailContainer item={someItem}>
          <h1>this is the header</h1>
          <ItemBody key="item-body" />
        </DetailContainer>
      </div>
      );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
