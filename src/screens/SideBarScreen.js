import React from 'react';
import {
    View,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native';
import { DrawerItems } from 'react-navigation';
import LogoTitle from '../components/LogoTitle';
import colors from '../styles/colors';

export default (props) => {
    return (
        <ScrollView>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <View style={styles.titleContainer}>
                    <LogoTitle style={styles.title} />
                </View>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: colors.headerBackground,
        paddingLeft: 18,
        paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
        height: 80 + (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
        alignItems: 'flex-start'
    },
    title: {
        color: colors.secondary
    }
});
