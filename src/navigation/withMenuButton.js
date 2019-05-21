import React from 'react';
import { MaterialHeaderButtons, Item } from '../components/MaterialHeaderButtons';

export default withMenuButton = (Screen) => class extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        ...((typeof Screen.navigationOptions === 'function')
            ? Screen.navigationOptions(navigation)
            : Screen.navigationOptions),
        headerLeft: (
            <MaterialHeaderButtons>
                <Item title="menu" iconName="menu" onPress={() => navigation.openDrawer()} />
            </MaterialHeaderButtons>
        )
    });

    static drawerNavigationOptions = Screen.drawerNavigationOptions;

    render() {
        return <Screen {...this.props} />
    }
}
