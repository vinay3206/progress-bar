import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ProgressBar from './Progress-Bar';
import { Dropdown } from './Dropdown';
import Button from './Button';
import { getProgress } from '../redux/actions'

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
  font-size: 1em;
  text-align: center;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`


const dropDownList = [
  {
    label: 'Progress1',
    value: 'Progress1',
  },
  {
    label: "Progress2",
    value: "Progress2",
  }
]


class Home extends React.Component {
  componentDidMount() {
    const { getProgress } = this.props.actions;
    getProgress();
  }

  render() {
    return(
      <FlexContainer>
        <Row>
          <FlexItem>
            <ProgressBar />
          </FlexItem>
          <FlexItem>
            <Flex>
              <Dropdown 
                items={dropDownList}
                selectedValue="Progress1"
                onChangeHandler={() => {}}
                maxRows={15}
                width="140px"
              />
              <Button text="25" icon="fa-plus"/>
            </Flex>
          </FlexItem>
        </Row>
      </FlexContainer>
    );
  }
};

const mapStateToProps = state => ({
  ...state.progressData,
})

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators(
      {
        getProgress,
      },
      dispatch
    ),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
