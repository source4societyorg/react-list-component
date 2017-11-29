# react-list-component

## Requirements

Please be sure you have the following in your package.json:

    "dependencies": {
      "babel-polyfill": "6.23.0",
      "react": "15.6.1",
      "react-dom": "15.6.1",
      "styled-components": "2.0.0",
      "warning": "3.0.0"
    }

## Installation

Please be sure you have the requirements mentioned in the previous section installed.

We recommending forking this repository and using as a submodule. To use as a git submodule in your project, navigate to your components directory and run:

    git submodule add git@github.com:source4societyorg/react-list-component.git List

Replace the url with the url of your fork as needed.

For more information on how to use submodules, refer to the [git submodule reference](https://git-scm.com/docs/git-submodule) and this article from [TechJini](http://www.techjini.com/blog/working-with-git-submodules/)

## Example

This provides the skeletal structure useful for building straightforward tabulated lists. Wrap in a styled component to provide your apps look and feel.

You will need to import the following:

    import List from 'components/List';
    import ListRow from 'components/List/ListRow';
    import ListCell from 'components/List/ListCell';

The headings are specified as an array of objects. The rows are specified as children wrapped in a ListRow component, with each cell wrapped in a ListCell component. See the following example:

    <List headings=[
        {
          title: 'Cell 1',
        },
        {
          title: 'Cell 2',
        },
    }]>
        <ListRow>
          <ListCell>Contents of Cell 1</ListCell>
          <ListCell>Contents of Cell 2</ListCell>
        </ListRow>
    </List>
