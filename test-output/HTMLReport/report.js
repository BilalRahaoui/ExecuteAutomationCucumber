$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/Login.feature");
formatter.feature({
  "name": "Login feature.",
  "description": "  Description : This feature will test login functionality for the given application \"automationtesting.in\"",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with valid username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open browser",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter the url \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click on My Account link",
  "keyword": "And "
});
formatter.step({
  "name": "Send registered username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "name": "User must be successfully redirected to home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "rahaoui.bilalma",
        "invalid.password"
      ]
    },
    {
      "cells": [
        "invalid.email",
        "Testing^^password@12456#"
      ]
    },
    {
      "cells": [
        "invalid.email",
        "invalid.password"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with valid username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the url \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.enterTheUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on My Account link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickOnMyAccountLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send registered username as \"rahaoui.bilalma\" and password as \"invalid.password\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.sendRegisteredUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on LOGIN button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickOnLOGINButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must be successfully redirected to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userMustBeSuccessfullyRedirectedToHomePage()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Test failed because text is not visible or not match\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.LoginSteps.userMustBeSuccessfullyRedirectedToHomePage(LoginSteps.java:68)\r\n\tat ✽.User must be successfully redirected to home page(file:src/test/java/Feature/Login.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the url \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.enterTheUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on My Account link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickOnMyAccountLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send registered username as \"invalid.email\" and password as \"Testing^^password@12456#\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.sendRegisteredUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on LOGIN button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickOnLOGINButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must be successfully redirected to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userMustBeSuccessfullyRedirectedToHomePage()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Test failed because text is not visible or not match\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.LoginSteps.userMustBeSuccessfullyRedirectedToHomePage(LoginSteps.java:68)\r\n\tat ✽.User must be successfully redirected to home page(file:src/test/java/Feature/Login.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the url \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.enterTheUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on My Account link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickOnMyAccountLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send registered username as \"invalid.email\" and password as \"invalid.password\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.sendRegisteredUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on LOGIN button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickOnLOGINButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must be successfully redirected to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userMustBeSuccessfullyRedirectedToHomePage()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Test failed because text is not visible or not match\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.LoginSteps.userMustBeSuccessfullyRedirectedToHomePage(LoginSteps.java:68)\r\n\tat ✽.User must be successfully redirected to home page(file:src/test/java/Feature/Login.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});