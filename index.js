import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListHeadings from './ListHeadings';
import ListHeading from './ListHeading';
import ListBody from './ListBody';
import ListContainer from './ListContainer';

const renderListHeadings = (headings) => (
 <ListHeadings>
   {renderListHeading(headings)}
 </ListHeadings>
);   

const renderListHeading = (headings) => (
 headings.map( (heading) => (    
    <ListHeading sortKey={heading.sortKey} isSorting={heading.isSorting} sortAscending={heading.sortAscending}>{heading.title}</ListHeading>
 ))
);

const renderListBody = (children) => (
  children.map( (index) => (
    <ListBody>
      {renderListBodyCells(children)}
    </ListBody>
  ))
);

const renderListBodyCells = (children) => (
  children.map( (child, index) => child )
);

const List = (props) => (
    <ListContainer>
        {renderListHeadings(props.headings)}  
        {renderListBody(props.children)}
    </ListContainer>
);

List.defaultProps = {
    headings: [],
    items: [],
}

List.propTypes = {
    headings: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        sortKey: PropTypes.string.isRequired,
        isSorting: PropTypes.bool.isRequired,
        sortAscending: PropTypes.bool.isRequired
    })),
    items: PropTypes.array,
}

export default List;
