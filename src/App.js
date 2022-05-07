import './App.css';
import Profile from './Components/Profile';
import Login from './Components/Login';
import { changeColor } from './Features/Theme';
import ChangeColor from './Components/ChangeColor';

function App() {
  return (
    <div className="App">
      <h1>Hello this is Redux Learning</h1>

      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
