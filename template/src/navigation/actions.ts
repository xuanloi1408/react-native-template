import { NavigationActions } from "react-navigation";

const Navigator = {
    back: NavigationActions.back(),
    dashboard_home: NavigationActions.navigate({ routeName: 'dashboard_home' }),
}

export default Navigator;