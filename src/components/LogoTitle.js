import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import fonts from '../styles/fonts';

export default ({ style }) => {
    const styles = getStyles(style);
    return (
        <View style={styles.container}>
            <IonIcon style={styles.titleLogo}
                name='md-flash'
                size={22}
            />
            <Text style={styles.title}>My application</Text>
        </View>
    );
}

const getStyles = (style) => StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleLogo: {
        color: style.color,
        paddingTop: 5,
        paddingRight: 10
    },
    title: {
        fontSize: fonts.sizes.header,
        fontWeight: 'bold',
        color: style.color
    }
});
