import React from 'react';
import styled, { keyframes } from 'styled-components';

export const StyledContainer = styled.div`
  margin: 3rem auto;
  width: 40 rem;
  text-align: center;
`;
export const ProgressBarContainer = styled.div`
  padding: 0.3rem;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
`;

const progressAnimationStrike = keyframes`
  from { width: 0 }
  to   { width: ${(props) => `${props.to}%`} }
`;

export const StyledProgressBar = styled.div`
  height: 18px;
  background-color: ${(props) => props.isOverflow ? '#FF0000' : '#FCBC51'};
  border-radius: 4px; 
  transition: 0.4s linear;  
  transition-property: width, background-color; 
  width: ${(props) => `${props.to}%`}; 
  background-image: linear-gradient(
        45deg, rgb(252,163,17) 25%, 
        transparent 25%, transparent 50%, 
        rgb(252,163,17) 50%, rgb(252,163,17) 75%,
        transparent 75%, transparent);
  background-image: linear-gradient(
    45deg, ${(props) => props.isOverflow ? 'rgb(255,0,0)' : 'rgb(252,163,17)'} 25%, 
    transparent 25%, transparent 50%, 
    ${(props) => props.isOverflow ? 'rgb(255,0,0)' : 'rgb(252,163,17)'} 50%, ${(props) => props.isOverflow ? 'rgb(255,0,0)' : 'rgb(252,163,17)'} 75%,
    transparent 75%, transparent);
  animation: ${progressAnimationStrike} 6s;
`;

export class ProgressBar extends React.Component {
  render() {
    const { progress, isOverflow } = this.props;
    return (
      <StyledContainer>
        <ProgressBarContainer>
          <StyledProgressBar to={progress} isOverflow={isOverflow}>
            {progress ? `${progress}%` : ''}
          </StyledProgressBar>
        </ProgressBarContainer>
      </StyledContainer>
    );
  }
}

export default ProgressBar;
