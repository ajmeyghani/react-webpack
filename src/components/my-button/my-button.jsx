export default class MyButton extends React.Component {
  constructor(props) {
    super(props);
  }
  logMe(item) {
    console.log('ok', item);
  }
  render() {
    const children = this.props.children;
    const theItem = this.props.item;
    return (
      <div>
        <button onClick={() => {this.logMe(theItem)}}>{children ? children : 'ok'}</button>
      </div>
      );
  }
}
