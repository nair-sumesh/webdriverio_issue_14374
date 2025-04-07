const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const LoginPage = require("../../pages/login.page");
const SecurePage = require("../../pages/secure.page");

const pages = {
    login: LoginPage
};

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toContain(message);
});

//I validate 2 > 1
Then(/^I validate (\d+) > (\d+)$/, async (a, b) => {
    expect(parseInt(a)).toBeGreaterThan(parseInt(b));
});

//    Then I validate 1 < 2
Then(/^I validate (\d+) < (\d+)$/, async (a, b) => {
    expect(parseInt(a)).toBeLessThan(parseInt(b));
});