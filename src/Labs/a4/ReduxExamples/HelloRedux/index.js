import { useSelector} from "react-redux";
function HelloRedux() {
  const { message } = useSelector((state) => state.helloReducer);
  console.log(message);
  return (
    <div>
      <h1>Hello Redux</h1>
      <h2>{message}</h2>
    </div>
  );
}
export default HelloRedux;