// Automation testing Hello World! Example: Your First Program
import BrowserUtils from "../../../../e2e-core/src/shared/browser-wrapper/BrowserUtils";

describe('AuthenticationTesting', () => {
    it('should login successfully', () => {
        // Step 1: Load test data
        const loginUser = require('./login-onpremise.data').loginTestData;

        // Step 2: go to login page
        browser.url(`${process.env.TESTING_HOST}/cgi-bin/cbgrn/grn.cgi`);

        // Step 3: input username
        $('[name="_account"]').setValue(loginUser.username);

        // Step 4: input password
        $('[name="_password"]').setValue(loginUser.password);

        // Step 5: click on the login button
        $('[name="login-submit"]').click();

        BrowserUtils.pause(3000);

        // Step 6: verify login successfully
        assert.isTrue($(`//*[@id="header"]//span[@title="${loginUser.username}"]`).isDisplayed(),
            `Login failed`);

        BrowserUtils.pause(3000);
    });
});
