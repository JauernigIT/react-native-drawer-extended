import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SideBarScreen from '../screens/SideBarScreen';
import withHeader from './withHeader';
import withMenuButton from './withMenuButton';
import colors from '../styles/colors';

const HomeScreenWithMenuButton = withMenuButton(HomeScreen);
const SecondScreenWithMenuButton = withMenuButton(SecondScreen);

const MainDrawerNavigator = createDrawerNavigator({
    'Home': withHeader({ HomeScreenWithMenuButton }),
    'Second': withHeader({ SecondScreenWithMenuButton, DetailsScreen })
}, {
    contentComponent: SideBarScreen,
    drawerBackgroundColor: colors.bodyBackground,
    contentOptions: {
        inactiveTintColor: colors.primary,
        activeTintColor: colors.active
    }
});

export default createAppContainer(
    MainDrawerNavigator
);
