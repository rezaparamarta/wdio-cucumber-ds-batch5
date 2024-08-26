@login
Feature: Login Test

  Background:
  #Scenario Outline: login with username and password
    Given user is on the login page

  @positive @tc-1
  Scenario: Success Login
    And user input '<username>' as username
    And user input '<password>' as password
    When user click login button
    Then user should be redirected to homepage

    Examples:
      | username      | password      |
      | standard_user | secret_sauce  |
      | visual_user   | secret_saucew |

  @negative @tc-2
  Scenario: Login with wrong password
    And user input 'standard_user' as username
    And user input 'wrong_password' as password
    When user click login button
    Then user should see error message "Epic sadface: Username and password do not match any user in this service"

  #Scenario: Login with wrong password
  #  When user login '' as username and '' as password
  #  Then user should see error message ""