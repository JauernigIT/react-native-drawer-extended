import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fonts from '../styles/fonts';

export default class DetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('item').title
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>My Details Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bodyBackground,
        height: '100%'
    },
    title: {
        fontSize: fonts.sizes.contentTitle,
        textAlign: 'center',
        color: colors.primary,
        marginTop: 200
    },
});
