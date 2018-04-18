import "./index.css";
import React, { Component } from "react";
import FaPlay from "react-icons/lib/fa/play";
import FaPause from "react-icons/lib/fa/pause";
import FaForward from "react-icons/lib/fa/forward";
import FaBackward from "react-icons/lib/fa/backward";

class RadioGroup extends Component {
  state = {
    activeIndex: 2
  };

  constructor() {
    super();
  }

  setActiveIndex = index => {
    this.setState({ activeIndex: index });
  };

  componentDidMount() {
    this.setState(this.state);
  }

  render() {
    const activeIndex = this.state.activeIndex;
    const setActiveIndex = this.setActiveIndex;
    let children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        isActive: index === activeIndex,
        onchangeButton: () => setActiveIndex(index)
      });
    });

    return (
      <fieldset className="radio-group">
        <legend>{this.props.legend}</legend>
        {children}
      </fieldset>
    );
  }
}

class RadioButton extends Component {
  render() {
    const isActive = this.props.isActive; // <-- should come from somewhere
    const className = "radio-button " + (isActive ? "active" : "");
    return (
      <button onClick={this.props.onchangeButton} className={className}>
        {this.props.children}
      </button>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <RadioGroup legend="Radio Group">
          <RadioButton value="back">
            <FaBackward />
          </RadioButton>
          <RadioButton value="play">
            <FaPlay />
          </RadioButton>
          <RadioButton value="pause">
            <FaPause />
          </RadioButton>
          <RadioButton value="forward">
            <FaForward />
          </RadioButton>
        </RadioGroup>
      </div>
    );
  }
}

export default App;
