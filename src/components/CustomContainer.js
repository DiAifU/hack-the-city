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
        <Button primary as={Link} to="/tgjm">Click moi</Button>
        <Button seconday onClick={() => this.handleClick()}>Click moi</Button>
      </Segment>
    );
  }
}

export default CustomContainer;
