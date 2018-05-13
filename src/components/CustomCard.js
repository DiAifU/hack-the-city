import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const CustomCard = props => (
  <Card {...props}>
    <Card.Content>
      <Card.Header textAlign="center">{props.name}</Card.Header>
      <Card.Meta textAlign="center">{props.location}</Card.Meta>
      <Card.Description>
        Steve wants to add you to the group <strong>best friends</strong>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button color="green">
          Approve
        </Button>
        <Button basic color="red">
          Decline
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default CustomCard;
