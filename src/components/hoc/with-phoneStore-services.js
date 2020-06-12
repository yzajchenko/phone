import React from 'react';
import {PhoneStoreServicesConsumer} from '../phoneStore-services-context/';

const withPhoneStoreServices = () => (Wrapped) =>{
    return(props) => {
        return(
            <PhoneStoreServicesConsumer>{
                (phoneStoreServices) =>{
                    return (<Wrapped {...props}
                        phoneStoreServices={phoneStoreServices}/>)
                }
            }
            </PhoneStoreServicesConsumer>
        )
    }   
} 

export default withPhoneStoreServices;