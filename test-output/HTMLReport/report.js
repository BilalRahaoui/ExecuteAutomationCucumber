$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/Login.feature");
formatter.feature({
  "name": "Login feature.",
  "description": "  Description : This feature will test login functionality for the given application \"automationtesting.in\"",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with different data",
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
  "name": "Send username and password",
  "rows": [
    {
      "cells": [
        "rahaoui.bilalma",
        "Testing^^password@12456#"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.sendUsernameAndPassword(DataTable)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Could not convert arguments for step [Send username and password] defined at \u0027Steps.LoginSteps.sendUsernameAndPassword(DataTable) in file:/C:/Users/Bilal/Desktop/AutomationExecuteProject/target/test-classes/\u0027.\nIt appears you did not register a data table type. The details are in the stacktrace below.\r\n\tat cucumber.runner.PickleStepDefinitionMatch.registerTypeInConfiguration(PickleStepDefinitionMatch.java:59)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:44)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\nCaused by: io.cucumber.datatable.UndefinedDataTableTypeException: Can\u0027t convert DataTable to cucumber.api.DataTable.\nPlease register a DataTableType with a TableTransformer, TableEntryTransformer or TableRowTransformer for cucumber.api.DataTable.\r\n\tat io.cucumber.datatable.UndefinedDataTableTypeException.singletonNoConverterDefined(UndefinedDataTableTypeException.java:15)\r\n\tat io.cucumber.datatable.DataTableTypeRegistryTableConverter.toSingleton(DataTableTypeRegistryTableConverter.java:106)\r\n\tat io.cucumber.datatable.DataTableTypeRegistryTableConverter.convert(DataTableTypeRegistryTableConverter.java:75)\r\n\tat io.cucumber.datatable.DataTable.convert(DataTable.java:362)\r\n\tat io.cucumber.stepexpression.StepExpressionFactory$3.transform(StepExpressionFactory.java:73)\r\n\tat io.cucumber.stepexpression.DataTableArgument.getValue(DataTableArgument.java:19)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:41)\r\n\t... 29 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on LOGIN button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickOnLOGINButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User must be successfully redirected to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userMustBeSuccessfullyRedirectedToHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});