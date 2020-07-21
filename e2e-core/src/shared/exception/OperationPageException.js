import ExceptionBase from './ExceptionBase';

export default class OperationPageException extends ExceptionBase {
    constructor(exception) {
        super(exception, 'ERR_PAGE_INTERACTION');
    }
}
