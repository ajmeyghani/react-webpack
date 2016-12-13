import ReactDOM from 'react-dom';

import myButtonFn from 'my-button/my-button-fn';
import List from 'list/list';
import Detail from 'detail/detail';

const someItem = {
  id: 1, name: 'tom'
};

const dataItems = [
  {id: 1, name: 'item1'},
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <List items={dataItems} customButton={myButtonFn} />
        <List items={[{id: 0, name: 'cool'}]} />
        <p>-------------------------</p>
        <Detail item={someItem}>
          <p>This is the first child</p>
          <p>This is the second one</p>
        </Detail>
      </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
