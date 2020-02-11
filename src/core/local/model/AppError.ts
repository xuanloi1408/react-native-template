export default class AppError {
    code: number
    messeger: string

    constructor(code: number, messeger: string) {
        this.code = code;
        this.messeger = messeger;
    }
}

export const ERROR_TOKEN_IS_EXPIRED = 440;
