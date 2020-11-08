import React, {Component} from 'react';
import PhoneListItem from '../phone_list_item/';
import withPhoneStoreServices from '../hoc/';
import {connect} from 'react-redux';
import {phoneLoaded} from '../../actions/';
import './phone_list.css';

class PhoneList extends Component{
    componentDidMount(){
        const {phoneStoreServices} = this.props;
            phoneStoreServices.getPhone()
            .then((data)=>{
                this.props.phoneLoaded(data);
        });
    }
    
    render(){
        const {phones} = this.props;
        const {searchText} = this.props;

        const phoneLoaded = phones.filter((phone)=>{
            return phone.title.toLowerCase().indexOf(searchText.toLowerCase())>-1;
        });

        return(
            <ul className='phone_list'>
                {
                    phoneLoaded.map((phone)=>{
                        return(
                            <li key={phone.id}>
                                <PhoneListItem phone={phone}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        phones: state.phones
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
      phoneLoaded : (phones) => dispatch(phoneLoaded(phones))
    }
}

export default withPhoneStoreServices()(connect(mapStateToProps, mapDispatchToProps)(PhoneList));
