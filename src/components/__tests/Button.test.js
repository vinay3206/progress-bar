import React from 'react';
import { shallow } from 'enzyme';
import Button, { StyledButton } from '../Button';

describe("Progress bar app testing", () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it("Should render StyledButton", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find(StyledButton).length).toBeTruthy()
  });

  it("Should render Props", () => {
    const wrapper = shallow(<Button text="btn" onClick={() => {}} icon="fa-plus"/>);
    const button = wrapper.find(StyledButton);
    expect(button.props().onClick).toBeTruthy();
    expect(button.find('i').length).toBeTruthy();
    expect(button.text()).toEqual('btn');
  });
  
});