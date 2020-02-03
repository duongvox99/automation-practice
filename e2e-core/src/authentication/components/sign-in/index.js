import Authenticating from "../../test-flows/AuthenticatingGaroon";

/**
 *
 * @param {Object} credential e.g: {username:'user1',password:'user1'}
 */
exports.sign_in = (credential = {username:'user1',password:'user1'})=> {
    new Authenticating(credential).login();
}