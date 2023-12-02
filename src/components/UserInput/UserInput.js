import classes from "./UserInput.module.css";

const UserInput = ({onChangeInput, userInput}) => (
  <section className={classes.container}>
    <div className={classes.group}>
      <p>
        <label>Initial Investment</label>
        <input
          type="number"
          required
          value={userInput.initialInvestment}
          onChange={(event) =>
            onChangeInput('initialInvestment', event.target.value)}/>
      </p>
      <p>
        <label>Annual Investment</label>
        <input type="number"
               required
               value={userInput.annualInvestment}
               onChange={(event) =>
                 onChangeInput('annualInvestment', event.target.value)}/>
      </p>
    </div>
    <div className={classes.group}>
      <p>
        <label>Expected return</label>
        <input type="number"
               required
               value={userInput.expectedReturn}
               onChange={(event) =>
                 onChangeInput('expectedReturn', event.target.value)}/>
      </p>
      <p>
        <label>Duration</label>
        <input type="number"
               required
               value={userInput.duration}
               onChange={(event) =>
                 onChangeInput('duration', event.target.value)}/>
      </p>
    </div>
  </section>
);

export {UserInput};