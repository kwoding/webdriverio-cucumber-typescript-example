import { Given, When, Then } from 'cucumber';
import { TheInternetLoginPageObject } from '../page-objects/TheInternetLoginPageObject';
import { expect } from "chai";
const po = new TheInternetLoginPageObject();


Given('the login screen is shown', () => {
    po.openLoginScreen();
});

When('I log in', () => {
    const username: string = 'tomsmith';
    const password: string = 'SuperSecretPassword!';

    po.login(username, password);
});

Then('a confirmation message should be shown', () => {
    const successMessage: string = 'You logged into a secure area!';

    expect(po.getConfirmationText()).to.contain(successMessage);
});