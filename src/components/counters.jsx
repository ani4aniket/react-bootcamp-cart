import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {
  state = {};
  render() {
    const {
      counters,
      onReset,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>

        {counters.map(counter => (
          <Counter
            key={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
