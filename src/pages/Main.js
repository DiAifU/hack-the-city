import React from 'react';
import { Segment, Container, Grid, Card } from 'semantic-ui-react';
import CustomContainer from '../components/CustomContainer';
import CustomCard from '../components/CustomCard';

const Main = () => (
  <Container style={{ marginTop: '2em' }}>
    <Segment.Group>
      <Segment>
        <Grid doubling stackable columns={4}>
          <Grid.Column padded="very">
            <CustomCard fluid />
          </Grid.Column>
          <Grid.Column padded="very">
            <CustomCard fluid />
          </Grid.Column>
          <Grid.Column padded="very">
            <CustomCard fluid />
          </Grid.Column>
          <Grid.Column padded="very">
            <CustomCard fluid />
          </Grid.Column>
        </Grid>
      </Segment>
      <CustomContainer text="WESHEEEEUH" />
      <CustomContainer text="WESHEEEEUH" />
      <CustomContainer text="WESHEEEEUH" />
      <CustomContainer text="WESHEEEEUH" />
    </Segment.Group>
  </Container>
);

export default Main;
