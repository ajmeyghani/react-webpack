import React from 'react';
class MyButton extends React.Component {
  constructor(props) {
    super(props);
  }
  logMe(item) {
    console.log('ok', item);
  }
  render() {
    const children = this.props.children;
    return (
      <div>
        <button onClick={() => {this.logMe(this.props.item)}}>{children ? children : 'ok'}</button>
      </div>
      );
  }
}
export default (item) => {
  return (
      <MyButton item={item}>Add {item.name} +</MyButton>
    );
}
