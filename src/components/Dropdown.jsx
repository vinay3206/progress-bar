import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownListRef = React.createRef();
    this.state = {
      collapsed: false,
    };
  }

  getSelectedItem = () => {
    const { selectedValue } = this.props;
    const { items } = this.props;
    return items.find((item) => item.value === selectedValue);
  }

  onChangeItem = (e) => {
    const { onChangeHandler } = this.props;
    const { target } = e;
    this.hideDropdown();
    onChangeHandler(target.dataset.itemValue);
  }

  showDropdown = () => {
    this.dropdownListRef.current.scrollTo(0, 0);
    this.setState({ collapsed: true });
  }

  hideDropdown = () => this.setState({ collapsed: false });

  render() {
    const { collapsed } = this.state;
    const { items, style } = this.props;
    const selectedItem = this.getSelectedItem();
    const { label } = selectedItem || {};
    const maxRows = this.props.maxRows
      ? items.length < this.props.maxRows
        ? items.length
        : this.props.maxRows
      : items.length;

    const firstItem = selectedItem;
    const sortedItems = firstItem ? [
      firstItem,
      ...items.filter((item) => item.value !== selectedItem.value),
    ] : undefined

    return (
      <BaseDropdown
        className={`${collapsed ? 'active' : ''} ${!sortedItems ? 'disabled' : ''}`}
        rowHeight={this.props.rowHeight}
        itemCount={items.length}
        maxRows={maxRows || 1}
        width={this.props.width}
        style={style}
      >
        {maxRows > 1 && <i aria-hidden="true" className="dropdown icon fa fa-arrow-down" />}
        <div
          role="button"
          className="selected-label"
          onClick={sortedItems && sortedItems.length > 1 ? this.showDropdown : undefined}
        >
          {label}
        </div>
        <div ref={this.dropdownListRef} className="dropdown-menu">
          {sortedItems &&
            sortedItems.map(({ label, value }, index) => (
              <div
                data-item-value={value}
                key={`${value}-${index}`}
                onClick={this.onChangeItem}
              >
                {label}
              </div>
            ))}
        </div>
      </BaseDropdown>
    )
  }
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }),
  ).isRequired,
  selectedValue: PropTypes.any,
  onChangeHandler: PropTypes.func.isRequired,
  rowHeight: PropTypes.string,
  maxRows: PropTypes.number,
  width: PropTypes.string,
  style: PropTypes.any,
};

Dropdown.defaultProps = {
  rowHeight: '38px',
  width: '100%',
  maxRows: 15,
  selectedValue: '',
  style: {},
};

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  label {
    margin-right: 1rem;
    font-weight: bold;
    font-size: 1.143rem;
  }
`

const BaseDropdown = styled.div`
  cursor: pointer;
  position: relative;
  background: black;
  border-radius: 5px;
  color: white;
  user-select: none;
  width: ${(props) => props.width};
  .selected-label {
    font-weight: bold;
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
  }
  .dropdown-menu {
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    color: black;
    opacity: 0;
    z-index: 10;
    max-height: calc(${(props) => props.rowHeight} * 15 + 21px);
    overflow: ${(props) => (props.itemCount === props.maxRows ? 'unset' : 'auto')};
    transition: 0.4s all ease;
    height: ${(props) => props.rowHeight};
    background: orange;
    border-radius: 5px;
  }
  .dropdown-menu > *,
  .selected-label {
    position: relative;
    height: ${(props) => props.rowHeight};
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    position: relative;
  }
  .dropdown-menu > *:hover {
    background: black;
    color: #fff;
  }
  .dropdown.icon {
    position: absolute;
    z-index: 11;
    right: 15px;
    font-size: 1.25rem;
    line-height: 1.25rem;
    transition: transform 0.3s ease;
    transform: translateY(-50%);
    top: 50%;
    pointer-events: none;
  }
  &.active {
    z-index: 20;
  }
  &.active .dropdown-menu {
    opacity: 1;
    height: calc(${(props) => props.rowHeight} * ${(props) => props.maxRows});
    pointer-events: all;
  }
  &.active .dropdown.icon {
    transform: rotate(180deg) translateY(50%);
  }
  &.disabled {
    background: hsla(0, 0%, 48%, 1);
  }
  &.disabled .dropdown-menu > *,
  &.disabled .selected-label {
    cursor: default;
  }
`;

export { Dropdown, DropdownContainer };
