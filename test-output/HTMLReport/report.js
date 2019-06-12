$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/Login.feature");
formatter.feature({
  "name": "Login feature.",
  "description": "  Description : This feature will test login functionality for the given application \"automationtesting.in\"",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with invalid data",
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
  "name": "Send username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "name": "verify login",
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
        "rahaoui.bilalma",
        "Testing^^password@12456#"
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
  "name": "Login with invalid data",
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
  "name": "Send username as \"rahaoui.bilalma\" and password as \"invalid.password\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.sendUsernameAsAndPasswordAs(String,String)"
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
  "name": "verify login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid data",
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
  "name": "Send username as \"rahaoui.bilalma\" and password as \"Testing^^password@12456#\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.sendUsernameAsAndPasswordAs(String,String)"
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
  "name": "verify login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLogin()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Test failed,error message in login page should not be visible\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat Steps.LoginSteps.verifyLogin(LoginSteps.java:86)\r\n\tat ✽.verify login(file:src/test/java/Feature/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid data",
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
  "name": "Send username as \"invalid.email\" and password as \"Testing^^password@12456#\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.sendUsernameAsAndPasswordAs(String,String)"
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
  "name": "verify login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid data",
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
  "name": "Send username as \"invalid.email\" and password as \"invalid.password\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.sendUsernameAsAndPasswordAs(String,String)"
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
  "name": "verify login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});