import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import DrawerIcon from '../components/DrawerIcon';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default class SecondScreen extends React.Component {
    static navigationOptions = () => ({
        title: 'Second Screen'
    });

    static drawerNavigationOptions = {
        drawerLabel: 'Second',
        drawerIcon: ({ tintColor }) => <DrawerIcon name='star' color={tintColor} />
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>My Second Screen</Text>
                <FaIcon style={styles.icon}
                    name='arrow-circle-right'
                    size={40}
                    color={colors.headerBackground}
                    onPress={() => this.props.navigation.navigate('DetailsScreen', {
                        item: {
                            title: 'My Awesome Item'
                        }
                    })}
                />
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
    icon: {
        textAlign: 'center',
        marginTop: 20
    }
});
