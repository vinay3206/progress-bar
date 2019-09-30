import React from 'react';
import { shallow } from 'enzyme';
import { Home, FlexContainer, Row, FlexItem } from '../Home';
import ProgressBar from '../Progress-Bar';
import { Dropdown } from '../Dropdown';
import Button from '../Button';

const updateProgress = () => {};
const getProgress = () => {};
const actions = { getProgress, updateProgress }
const buttons = [42, -10, 34];
const bars = [12, 45, 67];
const progressBars = [
    { progress: 10, isOverflow: false }, 
    { progress: 50, isOverflow: false },
    { progress: 150, isOverflow: true },
]

describe("Home app testing", () => {
  it('renders without crashing', () => {
    shallow(
      <Home 
        actions={actions}
        bars={bars} 
        buttons={buttons}
        progressBars={progressBars}
      />
    );
  });

  it("Should render FlexContainer", () => {
    const wrapper = shallow(
      <Home 
        actions={actions}
        bars={bars} 
        buttons={buttons}
        progressBars={progressBars}
      />
    );
    expect(wrapper.find(FlexContainer).length).toEqual(1)
  });

  it("Should render Row", () => {
    const wrapper = shallow(
      <Home 
        actions={actions}
        bars={bars} 
        buttons={buttons}
        progressBars={progressBars}
      />
    );
    expect(wrapper.find(Row).length).toEqual(1)
  });

  it("Should render FlexItem", () => {
    const wrapper = shallow(
      <Home 
        actions={actions}
        bars={bars} 
        buttons={buttons}
        progressBars={progressBars}
      />
    );
    expect(wrapper.find(FlexItem).length).toBeTruthy()
  });

  it("Should render ProgressBar", () => {
    const wrapper = shallow(
      <Home 
        actions={actions}
        bars={bars} 
        buttons={buttons}
        progressBars={progressBars}
      />
    );
    expect(wrapper.find(ProgressBar).length).toEqual(3)
  });

  it("Should render 1 Dropdown", () => {
    const wrapper = shallow(
      <Home 
        actions={actions}
        bars={bars} 
        buttons={buttons}
        progressBars={progressBars}
      />
    );
    expect(wrapper.find(Dropdown).length).toEqual(1)
  });

  it("Should render 3 Button", () => {
    const wrapper = shallow(
      <Home 
        actions={actions}
        bars={bars} 
        buttons={buttons}
        progressBars={progressBars}
      />
    );
    expect(wrapper.find(Button).length).toEqual(3)
  });
  
});