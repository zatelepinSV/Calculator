import classes from "./UserInput.module.css";
const UserInput = () => {

  return (
    <section className={classes.container}>
      <div className={classes.group}>
        <p>
          <label>Initial Investment</label>
          <input type="number" required />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required />
        </p>
      </div>
      <div className={classes.group}>
        <p>
          <label>Expected return</label>
          <input type="number" required />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
};

export {UserInput};