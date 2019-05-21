import React from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome';

export default DrawerIcon = (props) => (
    <FaIcon
        name={props.name}
        size={20}
        color={props.color}
    />
);
