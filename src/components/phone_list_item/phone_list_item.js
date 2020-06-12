import React,{Fragment} from 'react';
import './phone_list_item.css';

const PhoneListItem = (props) => {
    const {phone} = props;
    return(
        <Fragment>
            <div className='phone_img'>
                <img src={`${phone.img}`} alt='phone'/>
            </div>
            <div className='title'>{phone.title}</div>
        </Fragment>
    )
};
export default PhoneListItem;