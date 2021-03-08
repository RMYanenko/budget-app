import { Component } from "react";
import { Row, Comment, Button, Input, Wrapper } from "./styles";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      date: new Date().toISOString().substring(0, 10),
      comment: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onChange(this.state);
    this.setState({
      value: "",
      date: "",
      comment: "",
    });
  };

  onChange = (e) => {
    const { value, name } = e.target; //отримуємо значення

    this.setState({
      // [name]: name === "value" ? +value : value, //вираховуємо поле і додаємо значення
      [name]: value, //вираховуємо поле і додаємо значення
    });
  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.onSubmit} className="">
          <Row>
            <Input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.onChange}
            />
            <Input
              className=""
              type="number"
              name="value"
              placeholder="Сума"
              value={this.state.value}
              onChange={this.onChange}
            />
          </Row>
          <Row>
            <Comment
              name="comment"
              value={this.state.comment}
              onChange={this.onChange}
            />
            <Button type="submit" className="">
              Зберегти
            </Button>
          </Row>
        </form>
      </Wrapper>
    );
  }
}

export default Form;
