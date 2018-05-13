import React from 'react';
import { Segment, Container, Grid } from 'semantic-ui-react';
// import CustomContainer from '../components/CustomContainer';
import CustomCard from '../components/CustomCard';

const data = [
  {
    name: 'Farm 1',
    location: 'NY, NY',
    score: 3,
  },
  {
    name: 'Farm 2',
    location: 'NY, NY',
    score: 4.5,
  },
  {
    name: 'Farm 3',
    location: 'NY, NY',
    score: 4.8,
  },
  {
    name: 'Farm 4',
    location: 'NY, NY',
    score: 0,
  },
];

const DispData = () => (
  <Container style={{ marginTop: '2em' }}>
    {
      <Segment.Group>
        <Segment>
          <Grid doubling stackable columns={4}>
            {data.map(farmer => (
              <Grid.Column padded="very">
                <CustomCard name={farmer.name} location={farmer.location} />
              </Grid.Column>
            ))}
          </Grid>
        </Segment>
      </Segment.Group>
    }
    {
      // <Segment.Group>
      //   <Segment>
      //     <Grid doubling stackable columns={4}>
      //       <Grid.Column padded="very">
      //         <CustomCard fluid />
      //       </Grid.Column>
      //       <Grid.Column padded="very">
      //         <CustomCard fluid />
      //       </Grid.Column>
      //       <Grid.Column padded="very">
      //         <CustomCard fluid />
      //       </Grid.Column>
      //       <Grid.Column padded="very">
      //         <CustomCard fluid />
      //       </Grid.Column>
      //     </Grid>
      //   </Segment>
      // </Segment.Group>
    }
  </Container>
);

export default DispData;
