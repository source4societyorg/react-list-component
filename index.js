import React from 'react';
import PropTypes from 'prop-types';
import ListHeadings from './ListHeadings';
import ListHeading from './ListHeading';
import ListHeadingRow from './ListHeadingRow';
import ListBody from './ListBody';
import ListContainer from './ListContainer';

const renderListHeadings = (headings) => (
  <ListHeadings>
    <ListHeadingRow>
      {renderListHeading(headings)}
    </ListHeadingRow>
  </ListHeadings>
);

const renderListHeading = (headings) => (
 headings.map((heading, index) => (
   <ListHeading key={`${heading.title}_${index}`} sortKey={heading.sortKey} isSorting={heading.isSorting} sortAscending={heading.sortAscending}>{heading.title}</ListHeading> // eslint-disable-line react/no-array-index-key
 ))
);

const renderListBody = (children) => (
  <ListBody>
    {children}
  </ListBody>
);

const List = (props) => (
  <ListContainer>
    {renderListHeadings(props.headings)}
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
};

export default List;
