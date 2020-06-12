import React, {Component} from 'react';

class SearchPanel extends Component{
    constructor(props){
        super(props);
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch = (e) => {        
        this.props.searchLoaded(e.target.value);
    }
    render(){
        return (
            <input onChange={this.onChangeSearch} className='form-control search-input' placeholder='search'/>
        )
    }
}

export default SearchPanel;
