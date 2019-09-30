import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown, BaseDropdown } from '../Dropdown';

const dropDownList = [{
    label: 'list1',
    value: 'list1',
  },
  {
    label: 'list2',
    value: 'list2',
  },
  {
    label: 'list3',
    value: 'list3',
  }
]

const onChangeHandler = () => {}

describe("Dropdown testing", () => {
  it('renders without crashing', () => {
    shallow(<Dropdown items={dropDownList} onChangeHandler={onChangeHandler}/>);
  });

  it("Should render BaseDropdown", () => {
    const wrapper = shallow(<Dropdown items={dropDownList} onChangeHandler={onChangeHandler}/>);
    expect(wrapper.find(BaseDropdown).length).toBeTruthy();
  });

  it("Should render BaseDropdown", () => {
    const wrapper = shallow(<Dropdown items={dropDownList} onChangeHandler={onChangeHandler}/>);
    expect(wrapper.find(BaseDropdown).length).toBeTruthy();
  });

  it("Should render div with dropdown class", () => {
    const wrapper = shallow(<Dropdown items={dropDownList} onChangeHandler={onChangeHandler}/>);
    expect(wrapper.find('.dropdown').length).toEqual(1);
  })

  it("Should render div with dropdown class", () => {
    const wrapper = shallow(<Dropdown items={dropDownList} onChangeHandler={onChangeHandler}/>);
    expect(wrapper.find('.dropdown-menu').length).toEqual(1);
  })
});