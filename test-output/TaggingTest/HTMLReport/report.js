$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/Tagging.feature");
formatter.feature({
  "name": "This feature is for tags in cucumber.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify search functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "this is a search test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingSteps.thisIsASearchTest()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify advanced search functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@E2ETest"
    }
  ]
});
formatter.step({
  "name": "this is a advanced search test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingSteps.thisIsAAdvancedSearchTest()"
});
formatter.result({
  "status": "passed"
});
});