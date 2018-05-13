import React, { Component } from 'react';
import { Card, Button, Rating } from 'semantic-ui-react';

class CustomCards extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    const {
      name, location, score, info,
    } = this.props;
    return (
      <Card>
        <Card.Content>
          <Card.Header textAlign="center">{name}</Card.Header>
          <Card.Meta textAlign="center">{location}</Card.Meta>
          <br />
          <Card.Content textAlign="center">
            Rating: {score}
            <br />
            <Rating icon="star" defaultRating={score} maxRating={5} size="huge" disabled />
          </Card.Content>
          <br />
          <Card.Description>{info}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button fluid color="green" inverted="true" primary onClick={() => this.handleClick()}>
            Rate
          </Button>
        </Card.Content>
        {this.state.clicked && (
          <Card.Content textAlign="center" extra>
            <Rating icon="star" defaultRating={0} maxRating={5} size="huge" />
          </Card.Content>
        )}
      </Card>
    );
  }
}

export default CustomCards;
