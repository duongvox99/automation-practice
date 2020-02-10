export default class IFailedMessage {
    generateFailedMessage() {
        if (this === IFailedMessage) {
            throw new TypeError(
                "Can't call static abstract class method generateFailedMessage"
            );
        } else if (
            this.generateFailedMessage ===
            IFailedMessage.prototype.generateFailedMessage
        ) {
            throw new TypeError(
                'Please implement static abstract method generateFailedMessage'
            );
        } else {
            throw new TypeError(
                "Don't call static abstract method generateFailedMessage from child"
            );
        }
    }
}
