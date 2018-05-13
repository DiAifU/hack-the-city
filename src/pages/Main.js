import React from 'react';
import { Container } from 'semantic-ui-react';
import CustomContainer from '../components/CustomContainer';

const Main = () => (
  <Container style={{ marginTop: '2em' }}>
    <CustomContainer text="Display data" />
  </Container>
);

export default Main;
