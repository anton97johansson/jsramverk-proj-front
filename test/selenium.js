/**
 * Test for getting started with Selenium.
 */
"use strict";



const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');
const By = webdriver.By;

let browser;

// Test Suite
test.describe("me-page", function() {

    test.beforeEach(function(done) {
        this.timeout(20000);
        // browser = new webdriver.Builder().
        browser = new webdriver.Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().headless()).build();

        browser.get("https://antonscript.me/");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
        });

    function goToNavLink(target) {
        browser.findElement(By.linkText(target)).then(function(element) {
            element.click();
        });
    }

    function matchUrl(target) {
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("/" + target));
        });
    }

    function assertH2(target) {
        browser.findElement(By.css("h2")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }


    test.it("Test go to Register", function(done) {
        // try use nav link
        goToNavLink("Register");
        //
        // assertH1("Home");
        matchUrl("register" );

        done();
    });

    test.it("Test go to Reports", function(done) {
        // try use nav link
        goToNavLink("Reports");
        assertH2("Reports");
        this.timeout(20000);
        goToNavLink("Week");
        //
        // assertH1("Home");
        matchUrl("reports/week" );

        done();
    });

    test.it("Test go to Week 3", function(done) {
        // try use nav link
        goToNavLink("Reports");
        assertH2("Reports");
        this.timeout(20000);
        goToNavLink("Week");
        this.timeout(20000);
        goToNavLink("Week 3");
        //
        // assertH1("Home");
        matchUrl("reports/week/3" );

        done();
    });
});