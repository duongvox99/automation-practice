import Authenticating from "../../test-flows/AuthenticatingGaroon";

/**
 *
 * @param {Object} account e.g: {username:'user1',password:'user1'}
 */
exports.sign_in = (account = {username:'user1',password:'user1'})=> {
    new Authenticating(account).login();
}
