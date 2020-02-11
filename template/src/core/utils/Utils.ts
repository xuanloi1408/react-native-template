import { Linking, Platform, Alert } from 'react-native';
import * as StoreReview from 'react-native-store-review';
import { AppInfo } from '../common/Constants';
import Strings from '../common/Strings';

export const onRatingApp = () => {
    if (Platform.OS === 'ios') {
        if (StoreReview.isAvailable) {
            StoreReview.requestReview();
        } else {
            Linking.openURL(`https://itunes.apple.com/us/app/id${AppInfo.ios_app_id}`);
        }
    } else {
        Linking.openURL(`market://details?id=${AppInfo.android_package_name}`);
    }
};


export const callPhoneNumber = (phoneNumber: String) => {
    Linking.openURL(`tel:${phoneNumber}`);
};


export const alert = (title: string, message: string) => {
    Alert.alert(title, message,
        [
            {
                text: Strings.ok,
                style: 'cancel',
            },
        ],
        { cancelable: false },
    );
}