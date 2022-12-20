
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom"
import Menu from './Components/Menu';
import Public from './Routes/Public';

function App() {
  return (
    <Router>
        <Menu/>
        <Public/>
    </Router>
  );
}

export default App;
