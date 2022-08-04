$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register functionality",
  "description": "As a user I want to register my details",
  "id": "register-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8109852100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User is on register page",
  "description": "",
  "id": "register-functionality;user-is-on-register-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should be able to see \u0027Register\u0027 text",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 118294300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldBeAbleToSeeRegisterText()"
});
formatter.result({
  "duration": 74809900,
  "status": "passed"
});
formatter.after({
  "duration": 796299400,
  "status": "passed"
});
formatter.before({
  "duration": 6152580800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should be able to register with valid credentials",
  "description": "",
  "id": "register-functionality;user-should-be-able-to-register-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter firstname \"Joanna\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter lastname \"Smith\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter email address\"xyz23@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter phone number\"7798694757\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select gender radio button Female",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select country from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter password\"Asdfg909\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter confirm password\"Asdfg909\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 48000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joanna",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterFirstname(String)"
});
formatter.result({
  "duration": 465914500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smith",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterLastname(String)"
});
formatter.result({
  "duration": 123348500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz23@gmail.com",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 110799800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7798694757",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.iEnterPhoneNumber(String)"
});
formatter.result({
  "duration": 222076200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectGenderRadioButtonFemale()"
});
formatter.result({
  "duration": 192248400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectCountryFromDropdown()"
});
formatter.result({
  "duration": 143959500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdfg909",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 173750000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdfg909",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 113100100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 113124500,
  "status": "passed"
});
formatter.after({
  "duration": 844336300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "User should not be able to register with blank mandatory field",
  "description": "",
  "id": "register-functionality;user-should-not-be-able-to-register-with-blank-mandatory-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter firstname \"\u003cFirst Name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter lastname \"\u003cLast Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter email address\"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter phone number\"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter password\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter confirm password\"\u003cConfirm Password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see an error message \u0027Please fill out this field.\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "register-functionality;user-should-not-be-able-to-register-with-blank-mandatory-field;",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name",
        "Email",
        "Phone",
        "Password",
        "Confirm Password"
      ],
      "line": 35,
      "id": "register-functionality;user-should-not-be-able-to-register-with-blank-mandatory-field;;1"
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "line": 36,
      "id": "register-functionality;user-should-not-be-able-to-register-with-blank-mandatory-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4498759000,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User should not be able to register with blank mandatory field",
  "description": "",
  "id": "register-functionality;user-should-not-be-able-to-register-with-blank-mandatory-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter firstname \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter lastname \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter email address\"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter phone number\"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter password\"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter confirm password\"\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see an error message \u0027Please fill out this field.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 55500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterFirstname(String)"
});
formatter.result({
  "duration": 259820500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterLastname(String)"
});
formatter.result({
  "duration": 82357400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 86480100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.iEnterPhoneNumber(String)"
});
formatter.result({
  "duration": 126350500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 164202400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 186155300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 217959100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeAnErrorMessagePleaseFillOutThisField()"
});
formatter.result({
  "duration": 50300,
  "status": "passed"
});
formatter.after({
  "duration": 839678200,
  "status": "passed"
});
});