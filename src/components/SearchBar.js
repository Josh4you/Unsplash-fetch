import React from 'react';


class SearchBar extends React.Component {
    state = {
        term: "Type and Enter"
    };
    onFormSubmit = e => {
        e.preventDefault();
        this.props.omsubmit(this.state.term);
    };

    render() {
        return ( <
            div className = "container" >
            <
            form onSubmit = {
                e => {
                    this.onFormSubmit(e);
                }
            } >
            <
            div className = "form-group mt-4" >
            <
            label htmlFor = "search-bar" > Type 'n'
            Hit Enter < /label> <
            input id = " search-bar"
            type = "text"
            className = "form-control"
            value = {
                this.state.term
            }
            onChange = {
                e =>
                this.setState({
                    term: e.target.value
                })
            }
            onClick = {
                e =>
                this.setState({
                    term: " "
                })
            }
            /> <
            div className = "jumbotron d-none" > {} < /div> < /
            div > <
            /form> < /
            div >
        );
    }
}

export default SearchBar;