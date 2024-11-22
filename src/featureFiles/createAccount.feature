@androidApp @createAccount
Feature: As a new user
  I want to create a new wikipedia account

  Background:
    Given I am on the create account page

  @directToCreateAccount
  Scenario: Create account username field validation
    When I "populateUsername" field with the following
      | value | hello |
    And I submit the form
    Then the following error should be displayed
      | error | The user name "hello" is not available. Please choose a different name. |

  @directToCreateAccount
  Scenario: Password mismatch field validation
    When I "populateUsername" field with the following
      | value | supernova_89 |
    And I "populatePassword" field with the following
      | value | Letmein4234! |
    And I "populateRepeatPassword" field with the following
      | value | Letmein421! |
    And I submit the form
    Then the following error should be displayed
      | error | Passwords don't match |

  @directToCreateAccount
  Scenario: Password must be at least 8 characters
    When I "populateUsername" field with the following
      | value | supernova_89 |
    And I "populatePassword" field with the following
      | value | lu! |
    And I submit the form
    Then the following error should be displayed
      | error | The password must be at least 8 characters |