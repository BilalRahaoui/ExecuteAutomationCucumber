Feature: Login feature.
  Description : This feature will test login functionality for the given application "automationtesting.in"

  #Scenario: Login with valid username and password
    #Given Open browser
    #When Enter the url "http://practice.automationtesting.in/"
    #And Click on My Account link
    #And Send registered username as "rahaoui.bilalma" and password as "Testing^^password@12456#"
    #And Click on LOGIN button
    #Then User must be successfully redirected to home page

  Scenario Outline: Login with invalid data
    Given Open browser
    When Enter the url "http://practice.automationtesting.in/"
    And Click on My Account link
    And Send username as "<username>" and password as "<password>"
    And Click on LOGIN button
    Then verify login
    Examples:
      | username        | password                 |
      | rahaoui.bilalma | invalid.password         |
      | rahaoui.bilalma | Testing^^password@12456# |
      | invalid.email   | Testing^^password@12456# |
      | invalid.email   | invalid.password         |