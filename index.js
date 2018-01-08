import React from 'react';
import PropTypes from 'prop-types';
import ListHeadings from './ListHeadings';
import ListHeading from './ListHeading';
import ListHeadingRow from './ListHeadingRow';
import ListBody from './ListBody';
import ListContainer from './ListContainer';
import ListCaption from './ListCaption';

const setHeadingProps = (headings, sortKey, sortAscending) => {
  for (let i = 0; i < headings.length; i++) {
    if (headings[i].sortKey !== sortKey) {
      headings[i].isSorting = false;
      headings[i].sortAscending = true; 
    } else {
      headings[i].isSorting = true;
      headings[i].sortAscending = sortAscending;
    }
  } 
  console.log(headings);
  return headings;
}


const renderListHeadings = (headings, sortKey, sortAscending, sortCallback) => {
  headings = setHeadingProps(headings, sortKey, sortAscending)
  return (
    <ListHeadings>
      <ListHeadingRow>
        {renderListHeading(headings, sortCallback)}
      </ListHeadingRow>
    </ListHeadings>
  )
};

const renderSortingIcon = (isSorting, sortAscending) => (
  isSorting ? (<span className={'sort-icon ' + (sortAscending ? 'asc' : 'desc')}></span>) : null
)

const renderListHeading = (headings, sortCallback) => (
 headings.map((heading, index) => (
   <ListHeading onClick={(evt) => typeof sortCallback === 'function' && heading.canSort ? sortCallback(headings, index) : null} key={`${heading.title}_${index}`} sortKey={heading.sortKey} isSorting={heading.isSorting} sortAscending={heading.sortAscending} className={'heading ' + (heading.canSort ? 'sortable' : '')}>{heading.title} {renderSortingIcon(heading.isSorting, heading.sortAscending)}</ListHeading> // eslint-disable-line react/no-array-index-key
 ))
);

const renderListBody = (children) => (
  <ListBody>
    {children}
  </ListBody>
);

const renderListCaption = (props) => (
  props.caption ? ( <ListCaption>{props.caption}</ListCaption>) : null
);

const List = (props) => (
  <ListContainer>
    {renderListCaption(props)}
    {renderListHeadings(props.headings, props.sortKey, props.sortAscending, props.sortCallback)}
    {renderListBody(props.children)}
  </ListContainer>
);

List.defaultProps = {
  headings: [],
};

List.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    sortKey: PropTypes.string.isRequired,
    isSorting: PropTypes.bool.isRequired,
    sortAscending: PropTypes.bool.isRequired,
  })),
  children: PropTypes.node,
  caption: PropTypes.string,
  sortCallback: PropTypes.func,
  sortKey: PropTypes.string,
  sortAscending: PropTypes.bool,
};

export default List;
