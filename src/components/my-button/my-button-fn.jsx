import MyButton from 'my-button/my-button';
export default (item) => {
  return (
    <MyButton item={item}>Add {item.name} +</MyButton>
  );
}
