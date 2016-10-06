import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

import serialize from 'form-serialize';


import { searchNovelAsync } from '../actions/action';

const { Component, PropTypes } = React;

class SearchBar extends Component {
    static propTypes = {
        searchNovelAsync: PropTypes.func
    }
    handleSearch(event) {
        event.preventDefault();

        const form = ReactDOM.findDOMNode(this.refs.searchForm);
        const data = serialize(form, {hash: true});

        this.props.searchNovelAsync(data);
    }
    render() {
        const whiteFont = {color: 'white'};
        const SearchField = (<TextField name='word' hintText='Search...' inputStyle={whiteFont} />);

        const SearchButton = (
            <IconButton onClick={this.handleSearch.bind(this)} tooltip='Search'>
              <ActionSearch />
            </IconButton>
        );

        return (
            <div>
                <form ref='searchForm' onSubmit={this.handleSearch.bind(this)}>
                    <AppBar title={SearchField} iconElementRight={SearchButton}/>
                </form>
            </div>
        )
    }
}

export default connect(
  null,
  { searchNovelAsync }
)(SearchBar)