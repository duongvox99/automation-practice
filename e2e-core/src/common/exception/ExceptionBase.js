export default class ExceptionBase {
    constructor(exception, error_code) {
        if (!exception.hasOwnProperty('Class')) {
            exception.Class = '';
        }

        if (!exception.hasOwnProperty('Method')) {
            exception.Method = '';
        }

        if (!exception.hasOwnProperty('Exception')) {
            exception.Exception = exception;
        }

        if (!exception.hasOwnProperty('Selector')) {
            exception.Selector = {};
        }

        exception.ErrorCode = error_code;
        this._exception = exception;
        this._handleException();
    }

    _handleException() {
        let errorCause = '';
        let tryMessage = '';
        const isDomError =
            this._exception.Exception.hasOwnProperty('message') &&
            this._exception.Exception.message.indexOf('result.value.map') > -1;
        if (isDomError) {
            errorCause = 'The selector provided, the program to get multiple DOM elements';
            tryMessage = 'check the locator provided';
        }

        const errorTemplate = `
                ErrorCode: ${this._exception.ErrorCode}
                Error: ${this._exception.Class}->${this._exception.Method}: ${this._exception.Exception}
                Cause: ${errorCause}
                Try: ${tryMessage}
                Selector: ${this._exception.Selector}`;

        throw new TypeError(errorTemplate);
    }
}
