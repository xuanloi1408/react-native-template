import firebase from 'react-native-firebase';
let unsubscribe;

const NotificationUtils = {

    async subscribeFcm() {
        firebase.messaging().subscribeToTopic('labor');
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            unsubscribe = firebase.messaging().onMessage(async (remoteMessage) => {
                console.log('FCM Message Data:', remoteMessage.data);
            });
        } else {
            try {
                await firebase.messaging().requestPermission();
            } catch (error) {
            }
        }
    },

    unsubscribeFcm() {
        if (unsubscribe) {
            unsubscribe();
        }
    },

};

export default NotificationUtils;
