Feature: Register functionality
  As a user I want to register my details

  @Smoke
  Scenario: User is on register page
    Given I am on register page
    Then  I should be able to see 'Register' text

  @Regression
  Scenario: User should be able to register with valid credentials
    Given I am on register page
    When  I enter firstname "Joanna"
    And   I enter lastname "Smith"
    And   I enter email address"xyz23@gmail.com"
    And   I enter phone number"7798694757"
    And   I select gender radio button Female
    And   I select country from dropdown
    And   I enter password"Asdfg909"
    And   I enter confirm password"Asdfg909"
    Then  I click on submit button

  @Regression
  Scenario Outline: User should not be able to register with blank mandatory field
    Given I am on register page
    When  I enter firstname "<First Name>"
    And   I enter lastname "<Last Name>"
    And   I enter email address"<Email>"
    And   I enter phone number"<Phone>"
    And   I enter password"<Password>"
    And   I enter confirm password"<Confirm Password>"
    And   I click on submit button
    Then  I should see an error message 'Please fill out this field.'

    Examples:
    |First Name|   Last Name|  Email| Phone|   Password| Confirm Password|
    |          |            |       |      |           |                 |
