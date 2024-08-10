import './App.css';
import axios from "axios"

function App() {
  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      console.log(result.data);
    }).catch((err) => {
      console.log(err);
    });
  };
  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users?id=1").then((result) => {
      console.log(result.data);
    }).catch((err) => {
      console.log(err);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1 のユーザー</button>
    </div>
  );
}

export default App;
