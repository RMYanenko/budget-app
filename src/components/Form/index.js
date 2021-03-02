import { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onChange(this.state.value);
    this.setState({
      value: "",
    });
  };

  onChange = (e) => {
    const { value } = e.target; //отримуємо значення

    this.setState({
      value: +value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="">
        <input
          className="form-control"
          type="number"
          name="balance"
          placeholder="Сума"
          value={this.state.value}
          onChange={this.onChange}
        />
        <button type="submit" className="">
          Зберегти
        </button>
      </form>
    );
  }
}

export default Form;
