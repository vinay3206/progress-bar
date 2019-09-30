import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar, { StyledContainer, ProgressBarContainer, StyledProgressBar } from '../Progress-Bar';

describe("Progress bar app testing", () => {
  it('renders without crashing', () => {
    shallow(<ProgressBar />);
  });

  it("Should render StyledContainer", () => {
    const wrapper = shallow(<ProgressBar />);
    expect(wrapper.find(StyledContainer).length).toBeTruthy()
  });

  it("Should render ProgressBarContainer", () => {
    const wrapper = shallow(<ProgressBar />);
    expect(wrapper.find(ProgressBarContainer).length).toBeTruthy()
  });

  it("Should render StyledProgressBar", () => {
    const wrapper = shallow(<ProgressBar isOverflow={false} progress={30}/>);
    const element = wrapper.find(StyledProgressBar);
    expect(element.length).toBeTruthy();
    expect(element.props().isOverflow).toEqual(false);
    expect(element.props().to).toEqual(30);
    expect(element.text()).toEqual('30%');
  });
});