
const {name, displayName, iosVersion, androidVersion} = require('../../../app.json');

export default class AppConfigs {
    
    name: string = name
    displayName: string = displayName
    android_version: string = iosVersion
    ios_version: string = androidVersion

}
