import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialHeaderButtons, Item } from '../components/MaterialHeaderButtons';
import LogoTitle from '../components/LogoTitle';
import DrawerIcon from '../components/DrawerIcon';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default class HomeScreen extends React.Component {
    static navigationOptions = () => ({
        headerTitle: <LogoTitle style={styles.headerTitle} />,
        headerRight: (
            <MaterialHeaderButtons>
                <Item title="search" iconName="search" onPress={() => console.warn('search')} />
            </MaterialHeaderButtons>
        )
    });

    static drawerNavigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => <DrawerIcon name='home' color={tintColor} />
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>My Home Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bodyBackground,
        height: '100%'
    },
    headerTitle: {
        color: colors.secondary
    },
    title: {
        fontSize: fonts.sizes.contentTitle,
        textAlign: 'center',
        color: colors.primary,
        marginTop: 200
    }
});
