const { expect, driver } = require("@wdio/globals");
const homePage = require("../pageobjects/home.page.js");
const navigationPage = require("../pageobjects/navigation.page.js");
const signupPage = require("../pageobjects/signup.js");

describe('Registration and login', () => {
    it('Should sign up a new user and login', async () => {
        await navigationPage.goto('Sign up')
        await signupPage.register('marcelo','barbosa','99888887766','marcelo@email.com','3b4c-s3nh4', '3b4c-s3nh4')
        await homePage.openMenu('profile')
        expect (await profilePage.profileName('marcelo')).toExist()
    });
});