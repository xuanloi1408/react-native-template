import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from 'src/core/containers/splash/SplashScreen';
import HomeScreen from 'src/screen/dashboard/home/HomeScreen';

export const RootStack = createSwitchNavigator({
    splash: SplashScreen,
    dashboard_home: HomeScreen
}, { initialRouteName: 'splash' });

const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;