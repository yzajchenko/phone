import {createContext} from 'react';

const {
    Provider: PhoneStoreServicesProvider,
    Consumer: PhoneStoreServicesConsumer
} = createContext();

export {PhoneStoreServicesProvider, PhoneStoreServicesConsumer}