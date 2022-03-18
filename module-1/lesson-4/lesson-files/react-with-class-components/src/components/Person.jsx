import React from "react";

class Person extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "bob",
      age: 25,
    };

    this.handleIncreaseAge = () => {
      console.log("increase age");

      // Don't do this. Never use setState in the constructor method.
      this.setState({
        age: this.state.age + 1,
      });
    };

    this.handleDecreaseAge = this.handleDecreaseAge.bind(this);
  }

  componentDidMount() {
    console.log("My Component was mounted into the DOM");
    // NOTE: Let's simulate an API request eg.const data = axios.get('/myapi')
    setTimeout(() => {
      this.setState({ name: "tom" });
    }, 2000);

    setInterval(() => {
      this.valueThatIsNotInDataFlow = Math.random();
    }, 1000);
  }

  componentDidUpdate() {
    console.log("My Component did update");
  }

  componentWillUnmount() {
    console.log("My component was removed from DOM");
  }

  handleDecreaseAge() {
    // NOTE: Avoid doing this
    // this.setState({
    //   ...this.state,
    //   age: this.state.age - 1,
    // });

    this.setState((prevState) => {
      return {
        ...this.state,
        age: prevState.age - 1,
      };
    });
  }

  valueThatIsNotInDataFlow = "Lemons";

  render() {
    console.log("Render method was called");
    return (
      <div>
        name: {this.state.name}
        <br />
        Age: {this.state.age}
        <br />
        favourite food: {this.props.food}
        <button onClick={() => this.handleIncreaseAge()}>Increase age</button>
        <br />
        <button onClick={() => this.handleDecreaseAge()}>Decrease age</button>
        <hr />
        This value does not exist in local state.{" "}
        {this.valueThatIsNotInDataFlow}
      </div>
    );
  }
}

export default Person;
