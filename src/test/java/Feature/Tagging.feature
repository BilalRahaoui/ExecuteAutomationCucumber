Feature: This feature is for tags in cucumber.
  @SanityTest
  Scenario: Verify login
    Given this is a valid login test
  @SanityTest @E2ETest
  Scenario: Verify logout
    Given this is a logout test
  @E2ETest
  Scenario: Verify search functionality
    Given this is a search test
  @E2ETest
  Scenario: Verify advanced search functionality
    Given this is a advanced search test