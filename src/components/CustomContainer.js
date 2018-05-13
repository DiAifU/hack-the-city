import React, { Component } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class CustomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    const { text = 'Coucou' } = this.props;
    return (
      <Segment loading={this.state.clicked} padded="very">
        <p>{text}</p>
        <Button primary onClick={() => this.handleClick()}>Click me</Button>
        {this.state.clicked && (
          <Button primary as={Link} to="/pages/DataFarmer">Click me</Button>
        )}
      </Segment>
    );
  }
}

export default CustomContainer;
