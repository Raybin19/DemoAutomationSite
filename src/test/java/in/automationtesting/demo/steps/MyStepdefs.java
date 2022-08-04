package in.automationtesting.demo.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import in.automationtesting.demo.pages.RegisterPage;
import org.junit.Assert;

public class MyStepdefs {
    @Given("^I am on register page$")
    public void iAmOnRegisterPage() {
    }

    @Then("^I should be able to see 'Register' text$")
    public void iShouldBeAbleToSeeRegisterText() {
        String actualText = new RegisterPage().verifyRegisterPageText();
        String expectedText = "Register";
        Assert.assertEquals("Register text not displayed", expectedText, actualText);
    }

    @When("^I enter firstname \"([^\"]*)\"$")
    public void iEnterFirstname(String firstname) {
        new RegisterPage().enterFirstName(firstname);
    }

    @And("^I enter lastname \"([^\"]*)\"$")
    public void iEnterLastname(String lastname){
       new RegisterPage().enterLastName(lastname);
    }

    @And("^I enter email address\"([^\"]*)\"$")
    public void iEnterEmailAddress(String email) {
        new RegisterPage().enterEmailAddress(email);
    }

    @And("^I enter phone number\"([^\"]*)\"$")
    public void iEnterPhoneNumber(String number) {
        new RegisterPage().enterPhoneNumber(number);
    }

    @And("^I select gender radio button Female$")
    public void iSelectGenderRadioButtonFemale() {
        new RegisterPage().clickOnGenderRadioButton();
    }

    @And("^I select country from dropdown$")
    public void iSelectCountryFromDropdown() {
        new RegisterPage().selectCountry();
    }

    @And("^I enter password\"([^\"]*)\"$")
    public void iEnterPassword(String pwd){
        new RegisterPage().enterPassword(pwd);
    }

    @And("^I enter confirm password\"([^\"]*)\"$")
    public void iEnterConfirmPassword(String pswd ) {
        new RegisterPage().enterConfirmPassword(pswd);
    }

    @Then("^I click on submit button$")
    public void iClickOnSubmitButton() {
        new RegisterPage().clickOnSubmitButton();
    }

    @Then("^I should see an error message 'Please fill out this field\\.'$")
    public void iShouldSeeAnErrorMessagePleaseFillOutThisField() {
    }

}
