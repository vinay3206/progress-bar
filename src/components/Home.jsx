import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ProgressBar from './Progress-Bar';
import { Dropdown } from './Dropdown';
import Button from './Button';
import { getProgress, updateProgress } from '../redux/actions'

export const FlexContainer = styled.div`
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

export const Row = styled.div`
  width: auto;
`;

export const FlexItem = styled.div`
  padding: 5px;
  margin: 10px;
  line-height: 20px;
  font-weight: bold;
  font-size: 1em;
  text-align: center;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProgress: '0',
    };
  }

  onProgressBarChange = (value) => {
    this.setState({
      selectedProgress: value,
    })
  }

  onButtonClick = (val) => {
    console.log("On Button click");
    const { updateProgress } = this.props.actions;
    const { selectedProgress } = this.state;
    updateProgress(val, parseInt(selectedProgress, 10));
  }

  componentDidMount() {
    const { getProgress } = this.props.actions;
    getProgress();
  }

  render() {
    const { buttons, bars, progressBars } = this.props;
    const { selectedProgress } = this.state;

    const progressBarList = bars.map((bar, index) => {
      return {
        label: `Progress ${ index + 1 }`,
        value: `${index}`,
      }
    })

    return(
      <FlexContainer>
        <Row>
          <FlexItem>
            {
              progressBars.map(bar => {
                return (
                  <ProgressBar key={bar} progress={bar.progress} isOverflow={bar.isOverflow}/>
                )
              })
            }
          </FlexItem>
          <FlexItem>
            <Flex>
              {
                progressBarList.length
                ?
                  <Dropdown 
                    items={progressBarList}
                    selectedValue={selectedProgress}
                    onChangeHandler={this.onProgressBarChange}
                    maxRows={15}
                    width="9rem"
                  />  
                :
                  ''
              }
              {
                buttons.map(val => {
                  return (
                    <Button text={val} key={val} icon={ (val < 0) ? 'fa-minues' : 'fa-plus' } onClick={this.onButtonClick.bind(this, val)}/>
                  )
                })
              }
            </Flex>
          </FlexItem>
        </Row>
      </FlexContainer>
    );
  }
};

const mapStateToProps = state => ({
  ...state.progressData,
  progressBars: state.progressData.bars.map(bar => {
    const isOverflow = bar > state.progressData.limit;
    return {
      progress: isOverflow ? 100 : Math.round((bar*100)/state.progressData.limit),
      isOverflow,
    }
  })
})

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators(
      {
        getProgress,
        updateProgress,
      },
      dispatch
    ),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
