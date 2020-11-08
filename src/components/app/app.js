import React, {Fragment, Component} from 'react';
import SearchPanel from '../search_panel/';
import PhoneList from '../phone_list/';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }
    
    onChangeSearch =(search) =>{
        this.setState({search});        
    }

    render(){
        return (
            <Fragment>
                <SearchPanel searchLoaded = {this.onChangeSearch}/>
                <PhoneList searchText={this.state.search}/>
            </Fragment>
        )
    }
}
export default App;
