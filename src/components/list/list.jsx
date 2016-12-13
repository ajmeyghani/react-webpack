export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return require('list/list.jsx.html')(this);
  }
}
