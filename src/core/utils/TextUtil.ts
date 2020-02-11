/**
 * Created by Cao Xuan Loi on 7/25/2019.
 */

const TextUtil = {
    isEmpty(str: string): boolean {
        return str === undefined || str === null || str === ""
    },
    validateEmail: (text: string) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            return false;
        } else {
            return true;
        }
    },
    validatePassword: (text: string) => {
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        if (reg.test(text) === false) {
            return false;
        } else {
            return true;
        }
    },
}

export default TextUtil;
