const FBSDK = require('react-native-fbsdk');
const {
    LoginManager,
    AccessToken,
    ShareDialog
} = FBSDK;

export default {
    async login() {
        return LoginManager.logInWithReadPermissions(['public_profile']).then(result => {
            if (result.isCancelled) {
                return;
            }
            return AccessToken.getCurrentAccessToken().then(data => {
                return data.accessToken;
            })
        }).catch(error => {
            return;
        })
    },

    logout() {
        LoginManager.logOut();
    },

    async getAccessToken() {
        return await LoginManager.getCurrentFacebook();
    },

    async shareLink(link, desc) {
        const shareLinkContent = {
            contentType: 'link',
            contentUrl: link,
            contentDescription: desc,
        };
        try {
            const canShow = await LoginManager.canShow(shareLinkContent);
            if (canShow) {
                const result = await LoginManager.show(shareLinkContent);
                if (!result.isCancelled) {
                    return true
                }
            }
        } catch (error) {
            return false
        }
    },

    shareLinkWithShareDialog(link, desc) {
        const shareLinkContent = {
            contentType: 'link',
            contentUrl: link,
            contentDescription: desc,
        };


        var tmp = this;
        ShareDialog.canShow(shareLinkContent).then(
            function (canShow) {
                if (canShow) {
                    return ShareDialog.show(shareLinkContent);
                }
            }
        ).then(
            (result) => {
                if (result.isCancelled) {
                    return false
                } else {
                    return true
                }
            },
            (error) => {
                return false
            }
        );
    }
}
