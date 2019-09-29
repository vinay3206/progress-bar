import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledContainer = styled.div`
  margin: 100px auto;
  width: 500px;
  text-align: center;
`;
const ProgressBarContainer = styled.div`
  padding: 6px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
`;

const progressAnimationStrike = keyframes`
  from { width: 0 }
  to   { width: ${(props) => `${props.to}%`} }
`;

const StyledProgressBar = styled.div`
  height: 18px;
  background-color: #ee303c;  
  border-radius: 4px; 
  transition: 0.4s linear;  
  transition-property: width, background-color; 
  background-color: #FCBC51; 
  width: ${(props) => `${props.to}%`}; 
  background-image: linear-gradient(
        45deg, rgb(252,163,17) 25%, 
        transparent 25%, transparent 50%, 
        rgb(252,163,17) 50%, rgb(252,163,17) 75%,
        transparent 75%, transparent); 
  animation: ${progressAnimationStrike} 6s;
`;

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { progress } = this.props;
    return (
      <StyledContainer>
        <ProgressBarContainer>
          <StyledProgressBar from={0} to={progress}>{progress}{' '}% </StyledProgressBar>
        </ProgressBarContainer>
      </StyledContainer>
    );
  }
}

export default ProgressBar;
