import logo from "../../assets/Money-Bag.png";
import classes from "./Header.module.css";

const Header = () => (
  <header className={classes.container}>
    <img className={classes.image} src={logo} alt="money bag"/>
    <h1 className={classes.content}>Investment Calculator</h1>
  </header>
);

export {Header};