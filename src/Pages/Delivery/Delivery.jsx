import React from 'react';
import Payment from './Payment/Payment';
import Pickup from './Pickup/Pickup';
import DlvrMaps from './DeliveryMaps/DlvrMaps';

const Delivery = () => {
    return (
        <>
            <Payment/>
            <Pickup/>
            <DlvrMaps/>
        </>
    );
};

export default Delivery;