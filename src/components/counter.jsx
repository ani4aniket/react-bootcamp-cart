import React, { Component } from "react";

class Counter extends Component {
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };
  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;

    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => onIncrement(counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => onDecrement(counter)}
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            {" "}
            -{" "}
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(counter.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
