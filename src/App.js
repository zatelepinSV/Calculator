//import Header from "./components/Header/Header";
import { Header } from './components/Header';
import { UserInput } from "./components/UserInput";
import classes from "./App.module.css";
import './index.css';

const App = () => {
  return (
    <div >
      <Header />
      <UserInput />
      <div></div>
    </div>
  );
};

export default App;
