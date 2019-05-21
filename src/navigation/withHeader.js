import { createStackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default withHeader = (Screens) => {
    return createStackNavigator(
        Screens,
        {
            navigationOptions: Screens[Object.keys(Screens)[0]].drawerNavigationOptions,
            defaultNavigationOptions: {
                headerTintColor: colors.secondary,
                headerStyle: styles.container
            }
        }
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.headerBackground
    }
});
