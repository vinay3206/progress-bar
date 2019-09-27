import React from 'react';
import styled from 'styled-components';
import ProgressBar from './Progress-Bar'

const FlexContainer = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Row = styled.div`
  width: auto;
`;

const FlexItem = styled.div`
  padding: 5px;
  margin: 10px;
  line-height: 20px;
  font-weight: bold;
  font-size: 2em;
  text-align: center;
`;


const Home = () => (
  <FlexContainer>
    <Row>
      <FlexItem>
        <ProgressBar />
      </FlexItem>
      <FlexItem>Home</FlexItem>
      <FlexItem>Home</FlexItem>
    </Row>
  </FlexContainer>
);

export default Home;
