$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/Login.feature");
formatter.feature({
  "name": "Login feature.",
  "description": "  Description : This feature will test login functionality for the given application \"automationtesting.in\"",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid username and password",
  "description": "",
  "keyword": "Scenario"
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
  "name": "Send registered username and password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.sendRegisteredUsernameAndPassword()"
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
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});